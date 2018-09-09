import React, { Component } from 'react';
import ShowcaseItem from './ShowcaseItem';
import cake from './cake.jpg';
import cupcakes from './cupcakes.jpg';
import macaroni from './macaroni.jpg';
import Web3 from 'web3';
import { config } from './config.js';

let web3js = new Web3(new Web3.providers.WebsocketProvider(config.infura.url));
let BN = web3js.utils.BN;

const items = [
  {
    key: 1,
    title: 'Cake',
    image: cake,
    price: '123000000000000000',
  },
  {
    key: 2,
    title: 'Cupcakes',
    image: cupcakes,
    price: '45000000000000000',
  },
  {
    key: 3,
    title: 'Macaroni',
    image: macaroni,
    price: '30000000000000000',
  },
];

function formatPrice(weiPriceString) {
  let price = web3js.utils.fromWei(weiPriceString);
  return `${price} ETH`;
}

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      count: 0,
      selectedItems: [],
    };
  }

  render() {
    return (
      <div>
        <h1 className="display-4">Store</h1>
        <div className="card-deck text-center">
          {items.map(function (item) {
            return <ShowcaseItem key={item.key} title={item.title} price={item.price} image={item.image} onClick={() => { this.onClickItem(item) }} />
          }, this)}
        </div>
        <p className="lead"><strong>{this.state.count}</strong> items in cart for <strong>{formatPrice(this.state.total)}</strong> in total</p>
        <button type="button" className="btn btn-primary btn-lg" onClick={this.onCheckout}>Check Out</button>
      </div>
    )
  }

  onClickItem = (item) => {
    let selectedItems = this.state.selectedItems;
    let selectedItem = null;
    let count = 0;
    let total = new BN();

    selectedItems.forEach((currentItem) => {
      count += currentItem.q;

      let price =  new BN(currentItem.item.price).mul(new BN(currentItem.q));

      total = total.add(price);

      if (currentItem.key === item.key) {
        selectedItem = currentItem;
      }
    });

    if (selectedItem) {
      selectedItem.q++;
    }
    else {
      selectedItem = { key: item.key, item: item, q: 1 };
      selectedItems.push(selectedItem);
    }

    count++;
    total = total.add(new BN(selectedItem.item.price));

    this.setState({
      total: total.toString(),
      count: count,
      selectedItems: selectedItems
    });
  }

  onCheckout = () => {
    if (this.state.selectedItems.length == 0)
      alert('Please select items');
    else
      this.props.history.push({pathname: '/checkout', state: { total: this.state.total, count: this.state.count, selectedItems: this.state.selectedItems }});
  }
}

export default Showcase;