const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: String,
  username: String,
  name: String,
  password: String,
  bio: String,
  phone: Number
})

module.exports = mongoose.model("Users", schema);
