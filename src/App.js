import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Showcase from './Showcase';
import Checkout from './Checkout';
import Wait from './Wait';
import Done from './Done';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {deeplink: 'https://google.com'};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal"><img src={logo} className="App-logo" alt="logo" /></h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <a className="p-2 text-white" href="/">Home</a>
            </nav>
            <a className="btn btn-primary" href="/checkout">Check Out</a>
          </div>
          <div className="container">
            <Route exact path="/" component={Showcase} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/wait" render={(props) => <Wait {...props} deeplink={this.state.deeplink} />} />
            <Route exact path="/done" component={Done} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
