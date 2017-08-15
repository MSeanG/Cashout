import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      user: "",
      redirect: false,
      users: []
    }
  }

  componentWillMount(){
    axios.get('localhost:3001/api/users').then(res => {
      console.log(res.data);
      this.setState({users: res.data})
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>What is your username?</h1>
          <input type="text" name="user_name" />
          <button>New User</button>
        </div>
        {this.state.users.map((user, i) => (
          <div key={i}>
            <Link to={`/user/${user._id}`}>
              {user.user}'s Stuff
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;