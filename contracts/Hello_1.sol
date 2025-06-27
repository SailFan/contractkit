// SPDX-License-Identifier: MIT

pragma solidity ^0.8.28;

contract Hello {
    string strVar = "Hello World";


    struct Info {
        string phrase;
        uint256 id;
        address addr;
    }

    function sayHello() 
    public
    view
    returns(string memory)
    {
        return strVar; 
    }    

}