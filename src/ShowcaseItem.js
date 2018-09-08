import React, { Component } from 'react';
import Web3 from 'web3';
import './ShowcaseItem.css';

let web3js = new Web3();

function formatPrice(weiPriceString) {
  let price = web3js.utils.fromWei(weiPriceString);

  return `${price} ETH`;
}

class ShowcaseItem extends Component {
  render() {
    return (
      <div class="card mb-4 shadow-sm">
        <img className="card-img-top" src={this.props.image} alt={this.props.title} />
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{this.props.title}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">{formatPrice(this.props.price)}</h1>
          <button type="button" className="btn btn-lg btn-block btn-outline-primary">Buy</button>
        </div>
      </div>
    )
  }
}

export default ShowcaseItem;