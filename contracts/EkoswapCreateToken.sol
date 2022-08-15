// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./EkoswapFactory.sol";

contract newToken is ERC20 {
    constructor(string memory tokenName, string memory tokenSymbol, uint tokenSupply) ERC20(tokenName, tokenSymbol) {
        _mint(msg.sender, tokenSupply);
    }
    function getContractAddress() public view returns(address contractAddress) {
        return address(this);
    }
}