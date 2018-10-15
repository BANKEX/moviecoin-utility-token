pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "openzeppelin-solidity/contracts/ownership/CanReclaimToken.sol";


contract MovieCoin is StandardToken, CanReclaimToken {
    string constant public symbol = "MOV";
    string constant public name = "\"MovieCoin\" project utility token";
    uint8 constant public decimals = 18;
    string constant public version = "1.0";

    constructor() public {
        totalSupply_ = 2000000000 * (10 ** uint256(decimals));
        balances[msg.sender] = totalSupply_;
        emit Transfer(address(0), msg.sender, totalSupply_);
    }
}
