var Web3 = require("web3");
var contractAddress = "0xad82f6506d9762e7089e4fbbbb680c3aa5b4fc58";
var abi = require("./manager2FA.json");
var address = "0xd9e5e4bde24faa2b277ab2be78c95b9ae24259a8";
require("./routes/router");

module.exports = {
  ethereum: function(userAddress, userCode) {
    if (typeof web3 !== "undefined") {
      let web3 = new Web3(web3.currentProvider);
    } else {
      let web3 = new Web3(
        new Web3.providers.HttpProvider(
          process.env.ETHEREUM_URI,
          process.env.ETHEREUM_HTTP_TIMEOUT || 0
        )
      );

      const contractInstance = web3.eth.contract(abi).at(contractAddress);
      console.log(contractInstance);
      //create the contract instance by setting the address and abi
      contractInstance
        .set2FA(userAddress, userCode, { from: address })
        .then((error, res) => {
          console.log(error);
          console.log(res);
        });

      //then interact with contract via the node

      //sendTransaction
    }
  }
};
