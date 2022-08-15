require("@nomicfoundation/hardhat-toolbox");

const OPTIMIZER_COMPILER = {
  version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  }
const LOWEST_OPTIMIZER_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

const DEFAULT_COMPILER_SETTINGS = {
  version: '0.7.6',
}
/** @type import('hardhat/config').HardhatUserConfig */
module.exports ={
  solidity: {
    compilers: [OPTIMIZER_COMPILER],
    overrides: {
      "./contracts/EkoswapCreateToken.sol": DEFAULT_COMPILER_SETTINGS
  },
}
};
