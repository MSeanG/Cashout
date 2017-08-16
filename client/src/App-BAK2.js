import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Loginscreen from './Loginscreen';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <Router>
        <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
      </Router>
    );
  }
}
const style = {
  margin: 15,
};
export default App;
