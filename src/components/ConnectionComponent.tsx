import { Button } from '@nextui-org/react';
import { useCallback } from 'react';
import { ethereumChainConfig } from '../env/CONSTANTS';

export const ConnectionComponent = ({
  setConnection,
}: {
  setConnection: (a: boolean) => void;
}) => {
  const connectMetamask = useCallback(async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        await window.ethereum.request(ethereumChainConfig);
        setConnection(true);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  return (
    <div className="flex h-screen items-center justify-center">
      <Button onClick={connectMetamask}>Connect Metamask</Button>
    </div>
  );
};
