import { Button, Grid } from '@nextui-org/react';
import NumberInputs from './NumberInput';

export const StackInput = ({ numbers, setNumbers }: any) => {
  const handleAddNumber = () => {
    setNumbers([...numbers, 0].map(i => Number(i)));
  };
  const handleNumberChange = (index: number, value: string) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };
  const handleRemoveNumber = () => {
    setNumbers(numbers.slice(0, numbers.length - 1));
  };
  const handleClear = () => {
    setNumbers([]);
  };

  return (
    <div className="overlay overflow-hidden w-[100%] h-full shadow-4xl">
      <NumberInputs numbers={numbers} handleNumberChange={handleNumberChange} />
      <Grid.Container gap={2}>
        <Grid>
          <Button className="mt-4 border-2" onPress={handleAddNumber}>
            Add Number
          </Button>
        </Grid>
        <Grid>
          <Button
            color="error"
            className="mt-4 border-2"
            onPress={handleRemoveNumber}
          >
            Remove Number
          </Button>
        </Grid>
        <Grid>
          <Button
            color="warning"
            onPress={handleClear}
            className="mt-4 border-2"
          >
            Clear
          </Button>
        </Grid>
      </Grid.Container>
    </div>
  );
};
