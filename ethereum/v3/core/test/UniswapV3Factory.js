// We import Chai to use its asserting functions here.
const { expect } = require("chai")
const { ethers } = require("hardhat");


describe("UniswapV3Factory", function () {

    let UniswapV3Factory;
    let UniswapV3FactoryInstance;
    let EkoToken;
    let Token1;
    let EkoTokenInstance;
    let Token1Instance;
    let deployer;
    let addr1;

    beforeEach(async function () {
        // Get the ContractFactory and Signers here.
        UniswapV3Factory = await ethers.getContractFactory("UniswapV3Factory");
        EkoToken = await ethers.getContractFactory("EkoToken");
        Token1 = await ethers.getContractFactory("Token1");

        [deployer, addr1] = await ethers.getSigners();
    });

    it("should deploy Uniswapv3Factory", async function () {
        // deploy factory contract
        UniswapV3FactoryInstance = await UniswapV3Factory.deploy();
        EkoTokenInstance = await EkoToken.deploy(1000);
        Token1Instance = await Token1.deploy(1000);

        // 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
        console.log(`Contract Deployed by Account %s \n \n`, deployer.address);
        console.log(`Uniswapv3Factory Contract address %s  \n \n `, UniswapV3FactoryInstance.address)
        console.log(`EkoToken Contract address %s  \n \n`, EkoTokenInstance.address)
        console.log(`Token1 Contract address %s  \n \n`, Token1Instance.address)

        expect(deployer.address).equal(deployer.address)
    });

    it("EkoToken / Token1", async function () {
        await UniswapV3FactoryInstance.createPool(EkoTokenInstance.address, Token1Instance.address, 3000)
    })
});