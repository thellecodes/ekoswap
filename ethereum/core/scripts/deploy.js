const main = async () => {
    // all contracts
    const UniswapV3FactoryContract = await ethers.getContractFactory("UniswapV3Factory");

    const [deployer] = await ethers.getSigners();

    const Uniswapv3FactoryInstance = await UniswapV3FactoryContract.deploy();

    console.log(`Contract Deployed by Account %s \n \n`, deployer.address);
    
    console.log(`Uniswap Factory Contract Address %s`, Uniswapv3FactoryInstance.address);
};

main()
    .then(() => process.exit(0))
    .catch((error) => console.log(error));