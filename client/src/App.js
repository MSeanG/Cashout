import React, { Component } from 'react';
import './layout.css';
import './colors.css';
import { BrowserRouter as Router , Route, Link  } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import CashOutForm from './components/CashOutForm';
import User from './components/User';
import AdminView from './components/AdminView';
import UserView from './components/UserView';


class App extends Component {
  render() {
    return (
      <Router>
        <div id="layout">
          <div id="header">
            <div id="left"><Link to="/home">HOME</Link></div>
             <div id="center">{/*<h1>Shift End Cash Out</h1>*/}</div> 
            <div id="right"><Link to="/login">LOGIN</Link></div>
          </div>
          <div id="format" className="binder">
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/cash-out-form" component={CashOutForm} />
            <Route path="/users/:userId" component={User} />
            <Route path="/admin-view" component={AdminView} />
            <Route path="/user-view" component={UserView} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
