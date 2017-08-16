const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Use native promises */
mongoose.Promise = global.Promise;

/*
const TimeStampSchema = new Schema ({
  created_at: Date,
  updated_at: Date
});
*/
const CashOutFormSchema = new Schema({
  name:                         String,
  charge_sales_plus_tips:       Number,
  charge_tips:                  Number,
  charge_sales_less_tips:       Number,
  total_sales:                  Number,
  total_charge_sales_plus_tips: Number,
  total_pay_outs:               Number,
  total_charges_plus_pay_outs:  Number,
  total_projected_cash_on_hand: Number,
  total_actual_cash_on_hand:    Number,
  total_cash_amount_difference: Number,
  total_gratuity_min_8_precent: Number,
  digital_signature:            String,
  created_at: Date,
  updated_at: Date
});

const UserSchema = new Schema({
  user_name: String,
  pass_code: { type: Number, required: true, unique: true },
  admin: Boolean,
  cash_out_forms: [CashOutFormSchema],
  user_list: [],
  created_at: Date,
  updated_at: Date
});

const CashOutListSchema = new Schema({
  name: Date
});

CashOutFormSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

const UserListSchema = new Schema ({
  name: String,
  user_names: [UserSchema]
});


/* const TimeStampModel = mongoose.model('TimeStamp', TimeStampSchema); */
const CashOutFormModel = mongoose.model('CashOut', CashOutFormSchema);
const UserModel = mongoose.model('User', UserSchema);
const CashOutListModel = mongoose.model('CashOutList', CashOutListSchema);
const UserListModel = mongoose.model('UserList', UserListSchema);

module.exports = {
  /* TimeStamp: TimeStampModel, */
  CashOutForm: CashOutFormModel,
  User: UserModel,
  CashOutList: CashOutListModel,
  UserList: UserListModel
};