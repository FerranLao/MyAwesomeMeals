const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  recovery: String,
  username: String,
  password: String,
  email:String,
  phone:String,
  meals:Array,
  active:{type:Boolean,default:false},
  google_Id:String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
