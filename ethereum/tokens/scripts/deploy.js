const { ethers } = require("hardhat");

const main = async () => {
    // all contracts
    const EkoToken = await ethers.getContractFactory("EkoToken");
    const Token1 = await ethers.getContractFactory("Token1");
    const WETH9 = await ethers.getContractFactory("WETH9");

    const [deployer] = await ethers.getSigners();
    const EkoTokenInstance = await EkoToken.deploy(10000000000000000000000n);
    const Token1Instance = await Token1.deploy(10000000000000000000000n);
    const WETHInstance = await WETH9.deploy();

    console.log(`Contract Deployed by Account %s \n \n`, deployer.address);
    // console.log(`EkoToken Contract Address %s`, EkoTokenInstance.address);
    // console.log(`Token1 Contract Address %s`, Token1Instance.address);
    console.log(`WETH9 Contract Address %s`, WETHInstance.address);
    // EkoToken Contract Address 0x2Bed0a7F2F227FE901D5e2bf2d5E73bfe6C09b3C
    // Token1 Contract Address 0xA80e52044311BCA5BEDC5A3462374f9A5aD87c43
    // WETH9 0x9E106a9eaF162aa1d8A8718b0192202D48C98E8d
};

main()
    .then(() => process.exit(0))
    .catch((error) => console.log(error));