var Web3 = require("web3");
var contractAddress = "";
var abi = require("abi.json");

module.exports = {
  ethereum: function() {
    if (typeof web3 !== "undefined") {
      web3 = new Web3(web3.currentProvider);
    } else {
      web3 = new Web3(
        new Web3.providers.HttpProvider(
          process.env.ETHEREUM_URI,
          process.env.ETHEREUM_HTTP_TIMEOUT || 0
        )
      );
    }

    //create the contract instance by setting the address and abi

    //then interact with contract via the node

    //sendTransaction
  }
};
