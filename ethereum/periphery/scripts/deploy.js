const { ethers } = require("hardhat");

const main = async () => {
    // all contracts
    // const EkoToken = await ethers.getContractFactory("EkoToken");
    // const Token1 = await ethers.getContractFactory("Token1");

    const [deployer] = await ethers.getSigners();

    console.log("reached here")

    // const EkoTokenInstance = await EkoToken.deploy(`${deployer.address}`);
    // const Token1Instance = await Token1.deploy(1000);

    // console.log(`Contract Deployed by Account %s \n \n`, deployer.address);

    // console.log(`EkoToken Contract Address %s`, EkoTokenInstance.address);
    // console.log(`Token1 Contract Address %s`, Token1Instance.address);
};

main()
    .then(() => process.exit(0))
    .catch((error) => console.log(error));