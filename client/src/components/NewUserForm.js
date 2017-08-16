import React, { Component } from 'react';

class NewUserForm extends Component {
  constructor() {
    super();
    this.state = {
      newUser: {}
    }
  }

  render() {
    return (
      <div>
        Hello from AddUser
      </div>
    );
  }
}

export default NewUserForm;