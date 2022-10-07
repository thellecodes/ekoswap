const { ethers } = require("hardhat");

const main = async () => {
    // all contracts
    const EkoToken = await ethers.getContractFactory("EkoToken");
    const Token1 = await ethers.getContractFactory("Token1");

    const [deployer] = await ethers.getSigners();

    console.log("reached here")

    const EkoTokenInstance = await EkoToken.deploy(`${deployer.address}`);
    const Token1Instance = await Token1.deploy(1000);

    console.log(`Contract Deployed by Account %s \n \n`, deployer.address);

    //  0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
    console.log(`EkoToken Contract Address %s`, EkoTokenInstance.address);
    console.log(`Token1 Contract Address %s`, Token1Instance.address);
    // 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
};

main()
    .then(() => process.exit(0))
    .catch((error) => console.log(error));