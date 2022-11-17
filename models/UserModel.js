const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: String,
  username: String,
  name: String,
  password: String
})

module.exports = mongoose.model("Users", schema);
