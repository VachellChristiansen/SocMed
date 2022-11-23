const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: String,
  title: String,
  music: String,
  // like: Number,
  file: String,
  // comments: [{
  //   name : String,
  //   caption: String,
  //    }
  //   ]
})

module.exports = mongoose.model("Posts", schema);
