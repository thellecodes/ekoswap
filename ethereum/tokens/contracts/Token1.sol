// contracts/GLDToken.sol // SPDX-License-Identifier: MIT pragma solidity =0.8.0;
pragma solidity =0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token1 is ERC20 {
    constructor(uint256 initialSupply) ERC20('TOKEN1', 'TK1') {
        require(initialSupply > 0, "Initial Supply Empty");
        _mint(msg.sender, initialSupply);
    }
}
