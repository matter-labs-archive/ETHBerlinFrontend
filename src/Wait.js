import React, { Component } from 'react';
import QRCode from 'react-qr-code';
import './Wait.css';

class Wait extends Component {
  componentDidMount() {
    setTimeout(() => {
    	this.props.history.push('/done');
    }, 60000);
  }

  render() {
    return (
      <div>
        <h1 className="display-4">Here is your ETH payment link</h1>
        <p className="text-center qrcode"><QRCode value={this.props.location.state.deeplink} /></p>
        <p><a href={this.props.location.state.deeplink} target="_blank">{this.props.location.state.deeplink}</a></p>
        <p className="lead">Do not leave this page until transaction will be confirmed.<br/>You will be automatically redirected to the next step.</p>
        <hr />
        <h3>Receipt</h3>
        <code className="text-left">
          <pre>
            {this.props.location.state.receipt}
          </pre>
        </code>
      </div>
    )
  }
}

export default Wait