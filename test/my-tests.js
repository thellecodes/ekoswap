const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("UniswapV3Core - UniswapV3Factory", () => {
    let UniswapV3ERC20;
    let UniswapV3Factory;
    let UniswapV3ERC20Instance;
    let UniswapV3FactoryInstance;

    let deployer;
    let addr1;
    let EkoToken;
    let EkoTokenInstance;


    beforeEach(async function () {
        UniswapV3Factory = await ethers.getContractFactory("UniswapV3Factory");
        EkoToken = await ethers.getContractFactory("EkoToken");
    })

    it("Compiles Uniswapv3FActory", async () => {
        console.log("compiling")
    })
})
