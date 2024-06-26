// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20 ("MyToken", "MKT") {}

    function mint(address recipient) public {
        _mint(recipient, 1000000 * (10 ** uint256(decimals())));
    }
}

