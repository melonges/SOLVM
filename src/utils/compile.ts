import { OPCODES } from '../env/CONSTANTS';

export const compile = (code: string): number[] | never => {
  const mnemonics = code.split('\n');
  const compiled = mnemonics.map((mnemonic) => {
    const opcode = OPCODES.indexOf(mnemonic);
    if (opcode === -1) {
      throw new Error(`Invalid mnemonic: ${mnemonic}`);
    }
    return opcode;
  });
  return compiled;
};
