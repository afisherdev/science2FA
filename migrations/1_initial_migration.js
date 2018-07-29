var Migrations = artifacts.require("./Migrations.sol");
var Manager2fa = artifacts.require("./Manager2fa.sol");

module.exports = function(deployer) {
  walletConfig = {
    from: "0xd9e5e4bde24faa2b277ab2be78c95b9ae24259a8"
  };
  deployer.deploy(Migrations, walletConfig);
  deployer.deploy(Manager2fa, walletConfig);
};
