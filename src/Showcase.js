import React, { Component } from 'react';
import ShowcaseItem from './ShowcaseItem';
import cake from './cake.jpg';
import cupcakes from './cupcakes.jpg';
import macaroni from './macaroni.jpg';

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

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <p className="lead"><strong>{this.state.selectedItems.length}</strong> items in cart</p>
        <button type="button" className="btn btn-primary btn-lg" onClick={this.onCheckout}>Check Out</button>
      </div>
    )
  }

  onClickItem = (item) => {
    let selectedItem = { key: item.key, item: item, q: 1 };

    let selectedItems = this.state.selectedItems;
    selectedItems.push(selectedItem);
    
    this.setState({
      selectedItems: selectedItems
    });
  }

  onCheckout = () => {
    if (this.state.selectedItems.length == 0)
      alert('Please select items');
    else
      this.props.history.push({pathname: '/checkout', state: { selectedItems: this.state.selectedItems }});
  }
}

export default Showcase;