pragma solidity ^0.8.0;

  enum OpCode {
        ADD, // 0
        SUB, // 1
        MUL, // 2
        DIV, // 3
        INC, // 4
        DEC, // 5
        DEL, // 6
        SWAP // 7
    }

contract SOLVM {
    function execute(OpCode[] calldata bytecode, int[] memory stack) public pure returns (int[] memory) {
        uint sp = stack.length - 1;

        for (uint ip = 0; ip < bytecode.length; ip++) {
            OpCode opcode = bytecode[ip];

            if (opcode == OpCode.ADD)
                stack[--sp] += stack[sp];

            else if (opcode == OpCode.SUB)
                stack[--sp] -= stack[sp];

            else if (opcode == OpCode.MUL)
                 stack[--sp] *= stack[sp];

            else if (opcode == OpCode.DIV) {
                require(stack[sp] != 0, "Division by zero is not allowed");
                stack[--sp] /= stack[sp];
            }
            else if (opcode == OpCode.INC)
                ++stack[sp];

            else if (opcode == OpCode.DEC)
                --stack[sp];

            else if (opcode == OpCode.DEL) {
                require(stack.length > 0, "Stack is empty");
                --sp;
            }
            else if (opcode == OpCode.SWAP) {
                require(stack.length >= 2, "Not enough stack size");
                (stack[sp], stack[sp - 1]) = (stack[sp - 1], stack[sp]);
            } else {
                revert("unexpected opcode");
            }
        }
        return stack.length > sp ? resizeStack(stack, sp + 1) : stack;
    }

    function resizeStack(int[] memory arr, uint newSize) internal pure returns (int[] memory) {
        int[] memory result = new int[](newSize);
        for (uint i = 0; i < newSize; i++)
          result[i] = arr[i];
        return result;
    }
}



