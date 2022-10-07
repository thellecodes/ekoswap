require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    networks: {
      goerli: {
        url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        accounts: [process.env.WALLET_PRIVATE_KEY],
      },
    },
    compilers: [
      { version: "0.8.0" }
    ]
  }
};
