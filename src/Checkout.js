import React, { Component } from 'react';

function getInvoice() {
	return '42';
}

class Checkout extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4">Checkout</h1>
        <p>
        	Goods
        </p>
        <p>
        	<button className="btn btn-success btn-lg" type='button' onClick={() => { this.props.history.push('/wait') }}>Confirm</button>
        </p>
      </div>
    )
  }
}

export default Checkout;