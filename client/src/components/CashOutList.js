import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class CashOutList extends Component {
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

        

        <h3>User List</h3>
        <ul className="normal-list">
          {this.state.users.map((user, i) => {
            return (
              
              <li key={i}>
                <Link to={`/users/${user._id}`}> {user.cash_out_forms}</Link>
              </li>
            );
          })}
        </ul>

      </div>
    );
  }
}
export default CashOutList;