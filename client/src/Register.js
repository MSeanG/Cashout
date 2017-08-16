import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Login from './Login';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      user_name:'',
      pass_code:''
    }
  }

    handleClick(event){
        var apiBaseUrl = "http://localhost:3001/api/users";
        console.log("values",this.state.user_name,this.state.pass_code);
        //To be done:check for empty values before hitting submit
        var self = this;
        var payload={
        "user_name":this.state.user_name,
        "pass_code":this.state.pass_code
        }
        axios.post(apiBaseUrl+'/register', payload)
      .then(function (response) {
        console.log(response);
        if(response.data.code == 200){
          //  console.log("registration successfull");
          var loginscreen=[];
          loginscreen.push(<Login parentContext={this}/>);
          var loginmessage = "Not Registered yet.Go to registration";
          self.props.parentContext.setState({loginscreen:loginscreen,
          loginmessage:loginmessage,
          buttonLabel:"Register",
          isLogin:true
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  render(){
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your User Name"
             type="text"
             floatingLabelText="User Name"
             onChange = {(event,newValue) => this.setState({user_name:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({pass_code:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;