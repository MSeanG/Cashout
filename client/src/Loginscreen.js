import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      user_name:'',
      pass_code:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
      loginscreen:loginscreen,
      loginmessage:loginmessage
    })
  }

  handleClick(event){
      // console.log("event",event);
      var loginmessage;
      if(this.state.isLogin){
        var loginscreen=[];
        loginscreen.push(<Register parentContext={this}/>);
        loginmessage = "Already registered.Go to Login";
        this.setState({
          loginscreen:loginscreen,
          loginmessage:loginmessage,
          buttonLabel:"Login",
          isLogin:false
        })
      }
      else{
        var loginscreen=[];
        loginscreen.push(<Login parentContext={this}/>);
        loginmessage = "Not Registered yet.Go to registration";
        this.setState({
          loginscreen:loginscreen,
          loginmessage:loginmessage,
          buttonLabel:"Register",
          isLogin:true
        })
      }
    }

  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Loginscreen;