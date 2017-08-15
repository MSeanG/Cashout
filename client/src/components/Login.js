import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {user_name: '', pass_code: ''};
  }
  _handleLoginChange = (event) => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;

    const login = { ...this.state.login };
    login[attributeName] = attributeValue;

    this.setState({ login })
  };

  _login = (event) => {
    event.preventDefault();

    this.props.logMeIn(this.state.login);
  };

  render() {
    return (
      <div id="verify">

        <h2>Login</h2>
        <form>
          <input type="text" name="user_name" placeholder="User Name" onChange={this._handleLoginChange} /><br />
          <input type="text" name="pass_code" placeholder="User Code" onChange={this._handleLoginChange} /><br />
          <input type="submit" value="Login"></input>
        </form>
      </div>
    );
  }
}

export default Login;