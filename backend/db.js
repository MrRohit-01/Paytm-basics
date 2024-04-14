const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/paytm");

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

UserSchema.methods.createHash = async function (plainTextPassword) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(plainTextPassword, salt);
};

UserSchema.methods.validatePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password_hash);
};

const User = mongoose.model("Users", UserSchema);
module.exports=User
