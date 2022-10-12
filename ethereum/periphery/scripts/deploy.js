const { ethers } = require("hardhat");

const main = async () => {
    // all contracts
    const SwapRouter = await ethers.getContractFactory("SwapRouter");
    const [deployer] = await ethers.getSigners();
    const factoryContractAddress = `0x0165878A594ca255338adfa4d48449f69242Eb8F`
    const WETH9ContractAddress = `0x5FC8d32690cc91D4c39d9d3abcBD16989F875707`;

    const SwapRouterInstance =
        await SwapRouter.deploy(`${factoryContractAddress}`, `${WETH9ContractAddress}`);
    console.log(`Contract Deployed by Account %s \n \n`, deployer.address);
    console.log(`Swap Router Contract Address %s \n \n`, SwapRouterInstance.address);
};

main()
    .then(() => process.exit(0))
    .catch((error) => console.log(error));