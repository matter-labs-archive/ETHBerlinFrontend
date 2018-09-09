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
  render() {
    return (
      <Router>
        <div className="App">
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal"><a href="/"><img src={logo} className="App-logo" alt="logo" /></a></h5>
            <nav className="my-2 my-md-0 mr-md-3">
            </nav>
          </div>
          <div className="container">
            <Route exact path="/" component={Showcase} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/wait" component={Wait} />
            <Route exact path="/done" component={Done} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
