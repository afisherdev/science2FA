import React, { Component } from "react";
<<<<<<< HEAD
import SimpleStorageContract from "../build/contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";

=======

import Manager2fa from "../build/contracts/manager2FA.json";
import getWeb3 from "./utils/getWeb3";

>>>>>>> df495d378a7e45b7e4dc7eb17be333f2832d7481
import "./css/oswald.css";
import "./css/open-sans.css";
import "./css/pure-min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storageValue: 0,
      web3: null
    };
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        });

        // Instantiate contract once web3 provided.
        this.instantiateContract();
      })
      .catch(() => {
        console.log("Error finding web3.");
      });
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */
<<<<<<< HEAD

    const contract = require("truffle-contract");
    const simpleStorage = contract(SimpleStorageContract);
    simpleStorage.setProvider(this.state.web3.currentProvider);

    // Declaring this for later so we can chain functions on SimpleStorage.
    var simpleStorageInstance;

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      simpleStorage
        .deployed()
        .then(instance => {
          simpleStorageInstance = instance;

          // Stores a given value, 5 by default.
          return simpleStorageInstance.set(5, { from: accounts[0] });
        })
        .then(result => {
          // Get the value from the contract to prove it worked.
          return simpleStorageInstance.get.call(accounts[0]);
        })
        .then(result => {
          // Update state with the result.
          return this.setState({ storageValue: result.c[0] });
        });
=======
    console.log("running instantiate");
    const contract = require("truffle-contract");
    const manager2FA = contract(Manager2fa);
    manager2FA.setProvider(this.state.web3.currentProvider);

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      console.log(accounts);
      manager2FA.deployed().then(instance => {
        this.setState({
          manager2FA: instance,
          address: accounts[0]
        });

        this.setData();
      });
>>>>>>> df495d378a7e45b7e4dc7eb17be333f2832d7481
    });
  }
  /*
*
* NEED THE 2-FA CODE TO BE STORED IN THE STATE AS 'this.state.code' 
so that in the setData() below, its tracked and passed properly
*
*
*
*/

  setData() {
    console.log(this.state.manager2FA);
    var maxNumber = 45;
    var randomNumber = Math.floor(Math.random() * maxNumber + 1);
    this.setState({
      code: randomNumber
    });
    try {
      this.state.manager2FA
        .set2FA(this.state.address, this.state.code, {
          from: this.state.address,
          gas: 29000
        })
        .then((err, result) => {
          if (err) console.log(err);

          console.log("result: " + result);
        });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <a href="#" className="pure-menu-heading pure-menu-link">
<<<<<<< HEAD
            Ether 2FA
=======
            Truffle Box
>>>>>>> df495d378a7e45b7e4dc7eb17be333f2832d7481
          </a>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
<<<<<<< HEAD
              <h1>Click below to get your two factor authentication code.</h1>
              <p />
              <button />

              <p>Your 2fa code is : {this.state.twofactorcode}</p>
=======
              <h1>Good to Go!</h1>
              <p>Your Truffle Box is installed and ready.</p>
              <h2>Smart Contract Example</h2>
              <p>
                If your contracts compiled and migrated successfully, below will
                show a stored value of 5 (by default).
              </p>
              <p>
                Try changing the value stored on <strong>line 59</strong> of
                App.js.
              </p>
              <p>The stored value is: {this.state.storageValue}</p>
>>>>>>> df495d378a7e45b7e4dc7eb17be333f2832d7481
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
