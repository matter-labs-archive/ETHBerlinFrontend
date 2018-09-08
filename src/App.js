import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Showcase from './Showcase';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal"><img src={logo} className="App-logo" alt="logo" /></h5>
          <a className="btn btn-primary" href="#">Check Out</a>
        </div>
        <h1 className="display-4">Store</h1>
        <div className="container">
          <Showcase />
        </div>
      </div>
    );
  }
}

export default App;
