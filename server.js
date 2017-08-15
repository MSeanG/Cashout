require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UsersController = require('./controllers/users')
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/cashout

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(bodyParser.json());
app.use('/api/users', UsersController);
app.get('/', (req,res) => {
  res.send('Cashout!')
})

//_handleLogin = (user_name, pass_code) => {
//    return axios.post(`/api/user/login`, {user_name, pass_code})
//      .then((res) => {
//        const newState = {...this.state}
//        newState.user.id = res.data._id;
//        newState.user.user_name = res.data.user_name;/*
//        newState.user.firstName = res.data.firstName;
//        newState.user.lastName = res.data.lastName;*/
//        newState.user.pass_code = res.data.pass_code;/*
//        newState.user.collections = res.data.collections*/
//        this.setState(newState)
//        return true;
//      })
//  }

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Cashout is on port " + PORT);
})