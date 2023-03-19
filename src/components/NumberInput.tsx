import { Input } from '@nextui-org/react';

function NumberInputs({
  handleNumberChange,
  numbers,
}: {
  handleNumberChange: any;
  numbers: number[];
}) {
  return (
    <>
      {numbers.map((number, index) => (
        <Input
          css={{ marginTop: '12px' }}
          fullWidth
          key={index}
          type="number"
          value={number}
          onChange={(e) => handleNumberChange(index, Number(e.target.value))}
        />
      ))}
    </>
  );
}

export default NumberInputs;
