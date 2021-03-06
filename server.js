require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UsersController = require('./controllers/users');
const UserListController = require('./controllers/user-List')
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
app.use(express.static(__dirname + '/client/build/'));
app.use('/api/users', UsersController);
app.use('/api/user-list', UserListController);
//app.get('/', (req,res) => {
//  res.send('Cashout!')
//})
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Cashout is on port " + PORT);
})