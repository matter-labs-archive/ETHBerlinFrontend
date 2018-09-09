import React, { Component } from 'react';

class Done extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4">Done!</h1>
        <div className="jumbotron">
        	<h1 className="text-success">Success</h1>
        </div>
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

export default Done;