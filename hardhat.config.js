require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-web3');

const config = require('./env.json');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  zksolc: {
    version: "1.3.1",
    compilerSource: "binary",
    settings: {},
  },
  networks: {
    ganache: {
      url: 'http://127.0.0.1:8545',
    },
    local: {
      url: 'http://localhost:8545',
      chainId: 31337,
    },
    goerli: {
      url: config.GOERLI_RPC,
      chainId: config.GOERLI_CHAIN_ID,
      accounts: []
    },
    testnet: {
      url: config.TESTNET_RPC,
      chainId: config.TESTNET_CHAIN_ID,
      accounts: [],
    },
    mainnet: {
      url: config.MAINNET_RPC,
      chainId: config.MAINNET_CHAIN_ID,
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.5.17',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 40000,
  },
  etherscan: {
    apiKey: config.ETHERSCAN_API_KEY,
  },
};
