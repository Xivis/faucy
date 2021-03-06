export const NETWORKS = [
  {
    value: 'ropsten',
    label: 'Ropsten',
    disabled: false,
    amount: '1',
    serviceDuration: '30 seconds',
    createEtherscanLink: (txHash) => `https://ropsten.etherscan.io/tx/${txHash}`,
    disclaimer: 'You have only 1 minute limit period per request ',
  },
  {
    value: 'kovan',
    label: 'Kovan',
    disabled: false,
    amount: '0.1',
    serviceDuration: '1 minute',
    createEtherscanLink: (txHash) => `https://kovan.etherscan.io/tx/${txHash}`,
    disclaimer: 'You have only 1 minute limit period per request ',
  },
  {
    value: 'rinkeby',
    label: 'Rinkeby',
    disabled: false,
    amount: '0.2',
    serviceDuration: '2 minutes',
    createEtherscanLink: (txHash) => `https://rinkeby.etherscan.io/tx/${txHash}`,
    disclaimer: 'You can do one request per address. Use another one if you need more ',
  },
  {
    value: 'goerli',
    label: 'Göerli',
    disabled: false,
    amount: '0.05',
    serviceDuration: '2 minutes',
    createEtherscanLink: (txHash) => `https://goerli.etherscan.io/tx/${txHash}`,
    disclaimer: 'You can do one request per address. Use another one if you need more ',
  },
];

export const NETWORK_IDS = {
  1: 'main',
  3: 'ropsten',
  4: 'rinkeby',
  5: 'goerli',
  42: 'kovan',
};

export const NETWORK_NAMES = {
  main: 1,
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  kovan: 42,
};

export const getNetworkName = (networkId) => NETWORK_IDS[networkId];
export const getNetworkId = (networkName) => NETWORK_NAMES[networkName] || NETWORK_NAMES.main;
