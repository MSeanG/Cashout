import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <div id="header">
            <div id="left"><Link to="/home">HOME</Link></div>
            <div id="center"><h1>Shift End Cash Out</h1></div>
            <div id="right"><Link to="/login">LOGIN</Link></div>
          </div>
          <div>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Header;