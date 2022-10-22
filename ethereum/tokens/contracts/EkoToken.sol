// SPDX-License-Identifier: MIT
pragma solidity =0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EkoToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("EkoToken", "EKT") {
        require(initialSupply > 0, "Initial Supply Empty");
        _mint(msg.sender, initialSupply);
    }
}
