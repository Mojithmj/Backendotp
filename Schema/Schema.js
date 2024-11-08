const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required:false
  },
  phone: {
    type: Number,
    required:false
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
  isactive: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("user", userSchema);