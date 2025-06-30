// SPDX-License-Identifier: MIT

pragma solidity ^0.8.28;


contract FundMe{

    string stravar = unicode'文凡的世界';
    struct Info {
        string phrase;
        uint256 id;
        address addr;
    }

    Info[] infos;
    mapping(uint256 => Info info) infoMapping;

    function setHello(string memory stravar,uint256 _id)
    public{
        Info memory info = Info(stravar,_id,msg.sender);
        infoMapping[_id] = info;
    }

    function sayHello(uint256 _id) 
    public 
    view 
    returns(string memory){
        return infoMapping[_id].phrase;
    }



}