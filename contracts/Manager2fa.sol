pragma solidity ^0.4.21;


contract manager2FA {
    
    address constant admin = 0xd9e5e4bde24faa2b277ab2be78c95b9ae24259a8;
    modifier onlyOwner {

    require(msg.sender == admin);
    _;
    }
    
    //time in unix timestamp
    uint256 constant timeLimit = 500;
    mapping(address => uint) public keysToAddress;    
    mapping(address => mapping(uint256 => uint256)) public addressToDatatoTime;
    address public owner;
    //getters
    
    constructor(){
        owner = msg.sender;
    }
    
    function verifyTx(address _sender, uint256 _code) returns (bool){
        //check that timelimit is not expired
        require(now < (addressToDatatoTime[_sender][_code] +500));
        // needs to verify that the person has the correct 2FA
        require(keysToAddress[_sender] == _code);
        return true;
            
        
        
    }
    
    //setters 
    function set2FA(address _sender, uint256 _code) onlyOwner returns (uint256)  {
        keysToAddress[_sender] = _code;
        //this setting the time on the code for that address, to the current time. 
        addressToDatatoTime[_sender][_code] = now;
        
    return addressToDatatoTime[_sender][_code];
        
    }
    
    function time() returns (uint){
        var time = now;
        return time;
    }
    
}