import React, { Component } from 'react';
import logo from './logo.svg';
import './layout.css';
import './colors.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <Router>
        <div id="layout">
          <Header />
          <Login />
        </div>
      </Router>
    );
  }
}

export default App;
