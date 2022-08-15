//SPDX-License-Identifier: MIT
pragma solidity >=0.7.6;

import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Factory.sol";
import "@uniswap/v3-periphery/contracts/libraries/OracleLibrary.sol";

contract ekoswapPriceOracle {
    address pool;
    function getPool(address token0, address token1, uint24 fee) public {
        address _pool = IUniswapV3Factory(0x1F98431c8aD98523631AE4a59f267346ea31F984).getPool(
            token0,
            token1,
            fee
        );
        require(_pool != address(0), "pool does not exist");
        pool = _pool;
    }
    function estimateAmountOut(address tokenIn, address tokenOut, uint24 fee, uint128 amountIn, uint32 secondsAgo) external returns (uint amountOut){
        getPool(tokenIn, tokenOut, fee);
        (int24 tick, ) = OracleLibrary.consult(pool, secondsAgo);
        amountOut = OracleLibrary.getQuoteAtTick(
            tick, amountIn, tokenIn, tokenOut
        );
    }
}