// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private data;

    event DataStored(uint256 data);

    function set(uint256 _data) public {
        data = _data;
        emit DataStored(data);
    }

    function get() public view returns (uint256) {
        return data;
    }
}
