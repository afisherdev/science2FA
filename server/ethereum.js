var Web3 = require("web3");
var contractAddress = "";
var abi = require("../build/contracts/manager2FA.json");
var address = "0xd9e5e4bde24faa2b277ab2be78c95b9ae24259a8";

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
    const contractInstance = () => web3.eth.contract(abi).at(contractAddress);
    var txid;
    //create the contract instance by setting the address and abi
    contractInstance
      .set2FA(userAddress, userCode, { from: address })
      .then((error, res) => {
        txid = res.txid;
        console.log(error);
        console.log(res.txid);
      });

    //then interact with contract via the node

    //sendTransaction
    return txid;
  }
};
