// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EkoToken is ERC20 {
    constructor() ERC20("EkoToken", "EKT") {
        _mint(msg.sender, 10 * 10 ** 26);
    }
}