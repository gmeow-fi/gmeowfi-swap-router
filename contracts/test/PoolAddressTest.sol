pragma solidity >=0.5.0;

import "../libraries/PoolAddress.sol"; 

contract PoolAddressTest {

    function getPoolAddress(
        address factory,
        address tokenA,
        address tokenB,
        uint24 fee
    ) public view returns (address) {
        return PoolAddress.computeAddress(factory, PoolAddress.getPoolKey(tokenA, tokenB, fee));
    }
}