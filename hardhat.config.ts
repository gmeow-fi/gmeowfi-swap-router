import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import * as dotenv from 'dotenv'
dotenv.config()

const DEFAULT_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1,
    },
    // metadata: {
    //   bytecodeHash: 'none',
    // },
  },
}

const config: HardhatUserConfig = {
  networks: {
    ganache: {
      url: 'http://localhost:8545',
      gasPrice: 20000000000,
      accounts: [process.env.GANACHE_PRIVATE_KEY || ''],
    },
    // for Sepolia testnet
    zircuitTestnet: {
      url: `https://zircuit1.p2pify.com/`,
      accounts: [process.env.ZIRCUIT_TESTNET_PRIVATE_KEY || ''],
      gasPrice: 10000000000,
    },
  },
  etherscan: {
    apiKey: {
      zircuitTestnet: process.env.SCAN_API_KEY || '',
    },
    customChains: [
      {
        network: 'zircuitTestnet',
        chainId: 48899,
        urls: {
          apiURL: 'https://explorer.zircuit.com/api/contractVerifyHardhat',
          browserURL: 'https://explorer.zircuit.com',
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
  },
}

export default config
