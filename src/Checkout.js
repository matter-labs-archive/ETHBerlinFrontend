import React, { Component } from 'react';
import Web3 from 'web3';
import { config } from './config.js';
import './Checkout.css';

let web3js = new Web3(new Web3.providers.WebsocketProvider(config.infura.url));

function getInvoice() {
	return '42';
}

function formatPrice(weiPriceString) {
  let price = web3js.utils.fromWei(weiPriceString);
  return `${price} ETH`;
}

class Checkout extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4">Checkout</h1>
        <table className="table">
          <thead>
            <tr><th className="text-left">Title</th><th>Price</th><th>quantity</th></tr>
          </thead>
          <tbody>
          	{this.props.location.state.selectedItems.map(function (item) {
              return <tr><td className="text-left">{item.item.title}</td><td>{formatPrice(item.item.price)}</td><td>{item.q}</td></tr>
            }, this)}
          </tbody>
        </table>
        <p>
        	<button className="btn btn-success btn-lg" type='button' onClick={this.onBtnCheckout}>Confirm</button>
        </p>
      </div>
    )
  }

  onBtnCheckout = (event) => {
    let address = '0xaaf3A96b8f5E663Fc47bCc19f14e10A3FD9c414B';
    let invoice = getInvoice();
    let total = 10000;

    this.props.history.push({pathname: '/wait', state: { deeplink: `ethereum:${address}/pay?uint256=${invoice}&value=${total}` }});
  }
}

export default Checkout;