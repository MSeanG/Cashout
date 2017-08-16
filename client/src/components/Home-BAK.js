import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
/* import axios from 'axios'; */

class Home extends Component {

  constructor() {
    super();
    this.state = {
      showAdminView: false
    }
  }

  _toggleAdminView = () => {
    const showAdminView = !this.state.showAdminView;
    this.setState({showAdminView});
  };

  render() {
    return (
      <div className="center">

        <h1> </h1><br />
        <p>Please Login to complete your End Of Shift Cash Out proccess.</p>
        <p>Other important notes about upcomming events, special, holidays etc. will appear here.</p>

      </div>
    );
  }
}

export default Home;