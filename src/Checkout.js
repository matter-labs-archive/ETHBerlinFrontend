import React, { Component } from 'react';
import Web3 from 'web3';
import { config } from './config.js';
import './Checkout.css';

let web3js = new Web3(new Web3.providers.WebsocketProvider(config.infura.url));

function getNonce() {
	return web3js.utils.randomHex(32);
}

function getInvoice(receiptString) {
  return web3js.utils.keccak256(receiptString)
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
            <tr><th className="text-left">Title</th><th>Price</th><th>Quantity</th></tr>
          </thead>
          <tbody>
          	{this.props.location.state.selectedItems.map(function (item) {
              return <tr><td className="text-left">{item.item.title}</td><td>{formatPrice(item.item.price)}</td><td>{item.q}</td></tr>
            }, this)}
          </tbody>
          <tfoot>
            <tr><th className="text-left">Total</th><th>{formatPrice(this.props.location.state.total)}</th><th>{this.props.location.state.count}</th></tr>
          </tfoot>
        </table>
        <p>
        	<button className="btn btn-success btn-lg" type='button' onClick={this.onBtnCheckout}>Confirm</button>
        </p>
      </div>
    )
  }

  onBtnCheckout = (event) => {
    let address = '0xaaf3A96b8f5E663Fc47bCc19f14e10A3FD9c414B';
    let total = this.props.location.state.total;
    let receipt = {
      items: this.props.location.state.selectedItems,
      nonce: getNonce(),invoice
    }
    let receiptString = JSON.stringify(receipt, null, 2);
    let invoice = getInvoice(receiptString);

    this.props.history.push({pathname: '/wait', state: { invoice: invoice, receipt: receiptString, deeplink: `ethereum:${address}/pay?uint256=${invoice}&value=${total}` }});
  }
}

export default Checkout;