import React, { Component } from 'react';
import logo from './logo.svg';
import './layout.css';
import './colors.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import User from './components/User';
import AddUser from './components/AddUser';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="layout">
          <div id="header">
            {/* <img src={logo} className="emblem" alt="logo" />  */}
          </div>
          <div id="herald"><h2>Shift End Cash Out</h2></div>
          <div id="format">
            <div id="binder">
              
              <div>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  {/* <li><Link to="/user-list">User List</Link></li> */}
                  {/* <li><Link to="/add-user">Add User</Link></li> */}
                </ul>
              </div> 
              <div>
                <Route exact path="/" component={Home} />
                {/* <Route path="/user-list" component={UserList}/> */}
                {/* <Route path="/add-user" component={AddUser}/> */}
                {/* <Route path="/user/:userId" component={User} /> */}
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
