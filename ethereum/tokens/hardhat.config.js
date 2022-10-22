require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const { WALLET_PRIVATE_KEY, ALCHEMY_API_KEY } = process.env

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
    },
  },
  solidity: {
    compilers: [
      { version: "0.8.0" },
      { version: "0.4.18" }
    ]
  }
};
