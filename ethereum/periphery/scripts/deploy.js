const { ethers } = require("hardhat");

const main = async () => {
    // all contracts
    const SwapRouter = await ethers.getContractFactory("SwapRouter");
    const [deployer] = await ethers.getSigners();
    const factoryContractAddress = `0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0`
    const WETHContractAddress = `0xa513E6E4b8f2a923D98304ec87F64353C4D5C853`;

    const SwapRouterInstance =
        await SwapRouter.deploy(`${factoryContractAddress}`, `${WETHContractAddress}`);
    console.log(`Contract Deployed by Account %s \n \n`, deployer.address);
    console.log(`Swap Router Contract Address %s \n \n`, SwapRouterInstance.address);
};

main()
    .then(() => process.exit(0))
    .catch((error) => console.log(error));