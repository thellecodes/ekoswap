const main = async () => {
    // all contracts
    const UniswapV3FactoryContract = await ethers.getContractFactory("UniswapV3Factory");

    const [deployer] = await ethers.getSigners();

    const Uniswapv3FactoryInstance = await UniswapV3FactoryContract.deploy();

    console.log(`Contract Deployed by Account %s \n \n`, deployer.address);
    
    // 0x59b670e9fA9D0A427751Af201D676719a970857b
    console.log(`Uniswap Factory Contract Address %s`, Uniswapv3FactoryInstance.address);
};

main()
    .then(() => process.exit(0))
    .catch((error) => console.log(error));