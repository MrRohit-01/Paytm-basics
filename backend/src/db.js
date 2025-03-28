const mongoose = require("mongoose");
require('dotenv').config();

const bcrypt = require("bcrypt");

mongoose.connect(process.env.DB_URL).then(()=>{
  console.log("connected sucessfully")
}).catch((e)=>{
  console.log(e)
});

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 20
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 20
  },
  password_hash: {
    type: String,
    required: true,
    minLength: 6
  }
});
const AccountSchema = mongoose.Schema({
    userId :{
      type : mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    balance: Number,
}) 

UserSchema.methods.createHash = async function (plainTextPassword) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(plainTextPassword, salt);
};

UserSchema.methods.validatePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password_hash);
};

const User = mongoose.model("Users", UserSchema);
const Account = mongoose.model("Account", AccountSchema);
module.exports={
  User,
  Account
}
