import React, { Component } from 'react';
import axios from 'axios';
import Form1 from './Form1';
import Form2 from './Form2';

class CashOutForm extends Component {

  _handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/category", this.state).then((res) => {
      console.log("Success!");
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="center">
        <h1>Cash Out Report</h1>
        <Form1 />
        <Form2 />
      </div>
    );
  }
}

export default CashOutForm;