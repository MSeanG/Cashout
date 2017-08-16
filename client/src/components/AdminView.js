import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import User from './User';
import axios from 'axios';

class AdminView extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentWillMount(){
    axios.get("/api/users").then((res) => {
      this.setState({users: res.data});
    });
  }

  render() {
    return (

      <div className="center">
        <h2>Admin View</h2>
        <ul className="users-list">
          {this.state.users.map((user, i) => {
            return (
              <li key={i}>
                <Link to={`/users/${user._id}`}> {user.user_name}'s Page</Link>
              </li>
            );
          })}
        </ul>
        <div>
          <Route path="/users/:userId" component={User} />
        </div>
      </div>

    );
  }
}

export default AdminView;