import React, { Component } from 'react';
import QRCode from 'react-qr-code';
import Web3 from 'web3';
import { config } from './config.js';
import './Wait.css';

let web3js = new Web3(new Web3.providers.WebsocketProvider(config.infura.url));

web3js.eth.getBlockNumber().then(console.log);

let subscription = null;

class Wait extends Component {
  componentDidMount() {
    subscription = web3js.eth.subscribe('logs', { address: config.contract.address }, (error, result) => {
      if (!error && result.data === this.props.location.state.invoice) {
        console.log('>', result);
        this.props.history.push({pathname: '/done', state: { receipt: this.props.location.state.receipt }});
        // web3js.eth.clearSubscriptions();
      }
    });
  }

  render() {
    return (
      <div>
        <h1 className="display-4">Here is your ETH payment link</h1>
        <p className="text-center qrcode"><QRCode value={this.props.location.state.deeplink} /></p>
        <p><a href={this.props.location.state.deeplink} target="_blank">{this.props.location.state.deeplink}</a></p>
        <p className="lead">Do not leave this page until transaction will be confirmed.<br/>You will be automatically redirected to the next step.</p>
      </div>
    )
  }
}

export default Wait