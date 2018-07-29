import React, { Component } from "react";

import Manager2fa from "../build/contracts/manager2FA.json";
import getWeb3 from "./utils/getWeb3";
import axios from "axios";
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
  handleClick() {
    console.log("heres the info:", this.state.address, this.state.code);
    axios.post("http://localhost:5000/2fa", {
      data: {
        address: this.state.address,
        code: this.state.code
      }
    });
  }
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
            Ether 2FA
          </a>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>Click below to get your two factor authentication code.</h1>
              <p />
              <button onClick={this.handleClick.bind(this)} />

              <p>Your 2fa code is : {this.state.twofactorcode}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
