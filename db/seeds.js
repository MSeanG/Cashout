require("dotenv").config();

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const TimeStamp = require('../models/');
const CashOutForm = require('../models/');
const User = require('../models/');
const CashOutList = require('../models/');

// Use native promises
mongoose.Promise = global.Promise;

const db = mongoose.connection;

// Remove seeds

TimeStamp.remove({}, function(error){
  console.log(error);
});

CashOutForm.remove({}, function(error){
  console.log(error);
});

User.remove({}, function(error){
  console.log(error);
});

CashOutList.remove({}, function(error){
  console.log(error);
});

//Seeded data

const Gilly = new User({
  user_name: 'Gilly',
  pass_code: '1234',
  admin: true,
  cash_out_forms: ['00000','00001'],
  time_stamp: '10011'
});

const Brian = new User ({
  user_name: 'Brian',
  pass_code: '4321',
  admin: false,
  cash_out_forms: [],
  time_stamp: '11010'
});

const Sean = new User ({
  user_name: 'Sean',
  pass_code: '0019',
  admin: false,
  cash_out_forms: ['00002']
});

// Save seeds

Gilly.save( (error)=>{
  if (error) console.log('Gilly user' + error);
  console.log('Gilly created');
});

Brian.save( (error)=>{
  if (error) console.log('Brian user' + error);
  console.log('Brian created');
});

Sean.save( (error)=>{
  if (error) console.log('Sean user' + error);
  console.log('Sean created');
});

// CONNECTION EVENTS
db.once('open', function() {
  console.log("Opened mongoose.");
});

db.once('close', function() {
  console.log("Closed mongoose.");
});

db.on('connected', function() {
  console.log('Mongoose connected to ' + db.host + ':' + db.port + '/' + db.name);
});

db.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

db.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

module.exports = db;