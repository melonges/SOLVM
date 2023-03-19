import { useState } from 'react';
import CodeEditorWindow from './CodeEditorWindow';
import { classnames } from '../utils/general';

import OutputWindow from './OutputWindow';
import { Button, Card, Text } from '@nextui-org/react';
import { StackInput } from './StackInput';
import { BigNumber } from 'ethers';
import { compile } from '../utils/compile';
import { useAppState } from '../store/AppStore';

const Application = () => {
  const [code, setCode] = useState('');
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null)

  const [stack, setState] = useState([1, 2]);
  const appState = useAppState();

  const onExecute = async (code: string) => {
    try {
      setError(null)
      if (!appState) throw Error('appState is null');
      setProcessing(true);
      const opcodes = compile(code);
      const contract = appState.state.contract;
      let result = await contract.execute(opcodes, stack);
      result = result.map((item: BigNumber) => item.toNumber());
      setOutputDetails(result);
      setProcessing(false);
    } catch (error: any) {
      setProcessing(false);
      setError(error.message)
    }
  };

  const onChange = (data: string) => {
    setCode(data.trim().toUpperCase());
  };

  return (
    <div className="scale-in-center">
      <div className="w-full">
        {' '}
        <div className="flex rounded-none m-4">
          {stack.map((item) => (
            <span style={{ border: '1px solid black', padding: '5px 10px' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <div className="flex flex-row w-full h-full justify-start items-end">
          <StackInput numbers={stack} setNumbers={setState} />
        </div>
        <CodeEditorWindow code={code} onChange={onChange} />
        <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
          <OutputWindow outputDetails={outputDetails} />
          <div className="flex flex-col items-center">
            <Button
              onPress={() => onExecute(code)}
              disabled={!code || processing}
              color="gradient"
              className={classnames('mt-4 border-2', !code ? 'opacity-50' : '')}
            >
              {processing ? 'Executing' : 'Compile and Execute'}
            </Button>
          </div>

          <div className="flex flex-col items-center pt-5">
            {error && <Card isHoverable color='red' variant="bordered" css={{ mw: "400px", backgroundColor: '$red500' }}>
              <Card.Body color='red'>
                <Text>{error}</Text>
              </Card.Body>
            </Card>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Application;
