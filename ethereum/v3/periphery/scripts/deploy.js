const { ethers } = require("hardhat");

const main = async () => {
    // all contracts
    const SwapRouter = await ethers.getContractFactory("SwapRouter");
    const [deployer] = await ethers.getSigners();
    const factoryContractAddress = `0x2f95117796a59f06d429C732a61A129ec74C7E51`;
    const WETH9ContractAddress = `0x9E106a9eaF162aa1d8A8718b0192202D48C98E8d`;
    // const EkoDex = await ethers.getContractFactory("EkoDex");
    const nonFungiblePositionManager = await ethers.getContractFactory("NonfungiblePositionManager");
    const nonfungibleTokenPositionDescriptor = await ethers.getContractFactory("NonfungibleTokenPositionDescriptor");

    // const SwapRouterInstance = await SwapRouter.deploy(`${factoryContractAddress}`, `${WETH9ContractAddress}`);
    // const nonfungibleTokenPositionDescriptorInstance = await nonFungiblePositionManager.deploy(`${WETH9ContractAddress}`, 1);
    // const nonFungiblePositionManagerInstance = await nonFungiblePositionManager.deploy(`${factoryContractAddress}`, `${WETH9ContractAddress}`, `descriptor`);

    // const EkoDexInstance = await EkoDex.deploy(`${nonFungiblePositionManagerInstance.address}`, `positon descriptor`);

    console.log(`Contract Deployed by Account %s \n \n`, deployer.address);
    // console.log(`Ekodex Contract Address % s`, EkoDexInstance.address);
    // console.log(`Swap Router Contract Address %s \n \n`, SwapRouterInstance.address);
    // console.log(`nonfungibleTokenPositionDescriptor contract address %s \n\n`, nonfungibleTokenPositionDescriptorInstance.address);
    // console.log(`Non Fungible position manager contract address %s \n \n`, nonFungiblePositionManagerInstance.address);
};

main()
    .then(() => process.exit(0))
    .catch((error) => console.log(error));