import React, { Component } from 'react';
import QRCode from 'react-qr-code';
import './Wait.css';

class Wait extends Component {
  componentDidMount() {
    // setTimeout(() => {
    // 	this.props.history.push('/done');
    // }, 10000);
  }

  render() {
    return (
      <div>
        <h1 className="display-4">Here is your ETH payment link</h1>
        <p className="text-center qrcode"><QRCode value={this.props.deeplink} /></p>
        <p><a>___{this.props.deeplink}___</a></p>
        <p className="lead">Do not leave this page until transaction will be confirmed.<br/>You will be automatically redirected to the next step.</p>
      </div>
    )
  }
}

export default Wait