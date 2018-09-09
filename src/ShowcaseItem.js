import React, { Component } from 'react';
import Web3 from 'web3';
import { config } from './config.js';
import './ShowcaseItem.css';

let web3js = new Web3(new Web3.providers.WebsocketProvider(config.infura.url));

//web3js.eth.getBlockNumber().then(console.log);

let subscription = web3js.eth.subscribe('logs', { address: config.contract.address }, (error, result) => {
  if (!error)
    console.log('>', result);
});

function formatPrice(weiPriceString) {
  let price = web3js.utils.fromWei(weiPriceString);
  return `${price} ETH`;
}

class ShowcaseItem extends Component {
  render() {
    return (
      <div className="card mb-4 shadow-lg">
        <img className="card-img-top" src={this.props.image} alt={this.props.title} />
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{this.props.title}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">{formatPrice(this.props.price)}</h1>
          <button type="button" className="btn btn-lg btn-block btn-outline-primary" onClick={this.props.onClick}>Buy</button>
        </div>
      </div>
    )
  }
}

export default ShowcaseItem;