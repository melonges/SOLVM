export const ABI = [
  {
    inputs: [
      { internalType: 'enum OpCode[]', name: 'bytecode', type: 'uint8[]' },
      { internalType: 'int256[]', name: 'stack', type: 'int256[]' },
    ],
    name: 'execute',
    outputs: [{ internalType: 'int256[]', name: '', type: 'int256[]' }],
    stateMutability: 'pure',
    type: 'function',
  },
];

export const CONTRACT_ADDRESS = '0x2138366686dd3CDcb5f27944A4659b6Cf75CA9F6';

export const OPCODES = [
  'ADD',
  'SUB',
  'MUL',
  'DIV',
  'INC',
  'DEC',
  'DEL',
  'SWAP',
];

export const THEME = 'light';

export const ethereumChainConfig = {
  method: 'wallet_addEthereumChain',
  params: [
    {
      chainId: '0x61',
      chainName: 'Binance Smart Chain Testnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'bnb',
        decimals: 18,
      },
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      blockExplorerUrls: ['https://testnet.bscscan.com/'],
    },
  ],
};
