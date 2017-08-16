import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AdminView from './AdminView';
import UserView from './UserView';
class Login extends Component {

  render() {
    return (
      <Router>
      <div>
        <div className="center">
          <br />
          <Link to="/admin-view">Admin</Link><br />
          <br />
          <Link to="/user-view">User</Link>
        </div>
        <div>
          <Route path="/admin-view" component={AdminView} />
          <Route path="/user-view" component={UserView} />
        </div>
      </div>
      </Router>
    );
  }
}

export default Login;