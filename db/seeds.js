require("dotenv").config();

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

/* const TimeStamp = require('../models/time-stamp'); */
const CashOutForm = require('../models/cash-out-form');
const User = require('../models/user');
const CashOutList = require('../models/cash-out-list');
const UserList = require('../models/user-list');

/* Use native promises */
mongoose.Promise = global.Promise;

const db = mongoose.connection;

/* Remove seeds */
/*
TimeStamp.remove({}, function(error){
  console.log(error);
});
*/
CashOutForm.remove({}, function(error){
  console.log(error);
});

User.remove({}, function(error){
  console.log(error);
});

CashOutList.remove({}, function(error){
  console.log(error);
});

UserList.remove({}, function(error){
  console.log(error);
});

/* Seeded cash out form data */
const CashOutFormOne = new CashOutForm({
  charge_sales_plus_tips:       120.00,
  charge_tips:                  20.00,
  charge_sales_less_tips:       '',
  total_sales:                  500.00,
  total_charge_sales_plus_tips: '',
  total_pay_outs:               0,
  total_charges_plus_pay_outs:  '',
  total_projected_cash_on_hand: '',
  total_actual_cash_on_hand:    380.00,
  total_cash_amount_difference: '',
  total_gratuity_min_8_precent: 42.00,
  digital_signature:            'Sean',
  created_at: ''/*'2017-08-11T20:40:10:301Z'*/,
  updated_at: ''/*'2017-08-11T20:40:10:301Z'*/
});

const CashOutFormTwo = new CashOutForm({
  charge_sales_plus_tips:       120.00,
  charge_tips:                  20.00,
  charge_sales_less_tips:       '',
  total_sales:                  500.00,
  total_charge_sales_plus_tips: '',
  total_pay_outs:               0,
  total_charges_plus_pay_outs:  '',
  total_projected_cash_on_hand: '',
  total_actual_cash_on_hand:    380.00,
  total_cash_amount_difference: '',
  total_gratuity_min_8_precent: 42.00,
  digital_signature:            'Sean',
  created_at: ''/*'2017-08-12T20:40:10:301Z'*/,
  updated_at: ''/*'2017-08-12T20:40:10:301Z'*/
});

const CashOutFormThree = new CashOutForm({
  charge_sales_plus_tips:       120.00,
  charge_tips:                  20.00,
  charge_sales_less_tips:       '',
  total_sales:                  500.00,
  total_charge_sales_plus_tips: '',
  total_pay_outs:               0,
  total_charges_plus_pay_outs:  '',
  total_projected_cash_on_hand: '',
  total_actual_cash_on_hand:    380.00,
  total_cash_amount_difference: '',
  total_gratuity_min_8_precent: 42.00,
  digital_signature:            'Brian',
  created_at: ''/*'2017-08-13T20:40:10:301Z'*/,
  updated_at: ''/*'2017-08-13T20:40:10:301Z'*/
});


/* Seeded user data */

const Sean = new User ({
  user_name: 'Sean',
  pass_code: '0019',
  admin: false,
  user_list: [],
  cash_out_forms: [CashOutFormOne,CashOutFormTwo],
  created_at: ''/*'2016-08-20T20:40:10:201Z'*/,
  updated_at: ''/*'2016-08-20T20:40:10:201Z'*/
});

const Brian = new User ({
  user_name: 'Brian',
  pass_code: '4321',
  admin: false,
  user_list: [],
  cash_out_forms: [CashOutFormThree],
  created_at: ''/*'2016-09-26T20:40:10:301Z'*/,
  updated_at: ''/*'2016-09-26T20:40:10:301Z'*/
});

/* Seeded user list */
 const StartingUserList = new UserList ({
  name: 'Starting User List',
  user_list: [Brian,Sean]
 });

const Gilly = new User({
  user_name: 'Gilly',
  pass_code: '1234',
  admin: true,
  user_list: [StartingUserList],
  cash_out_forms: [],
  created_at: ''/*'2016-07-23T20:40:10:101Z'*/,
  updated_at: ''/*'2016-07-23T20:40:10:101Z'*/
});



/* Save seeds */

CashOutFormOne.save( (error)=>{
  if (error) console.log('Cash Out Form One user' + error);
  console.log('Cash Out Form One added');
});

CashOutFormTwo.save( (error)=>{
  if (error) console.log('Cash Out Form Two user' + error);
  console.log('Cash Out Form Two added');
});

CashOutFormThree.save( (error)=>{
  if (error) console.log('Cash Out Form Three user' + error);
  console.log('Cash Out Form Three added');
});



Brian.save( (error)=>{
  if (error) console.log('Brian user' + error);
  console.log('Brian added');
});

Sean.save( (error)=>{
  if (error) console.log('Sean user' + error);
  console.log('Sean added');
});

StartingUserList.save( (error)=>{
  if (error) console.log('Starting User List' + error);
  console.log('Starting User List added');
});

Gilly.save( (error)=>{
  if (error) console.log('Gilly user' + error);
  console.log('Gilly added');
});

/* CONNECTION EVENTS */
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