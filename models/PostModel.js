const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  userId: String,
  comment: String
})

const LikeSchema = mongoose.Schema({
  userId: String,
})

const PostSchema = mongoose.Schema({
  title: String,
  music: String,
  like: Number,
  file: String,
  like: [ LikeSchema ],
  comments: [ CommentSchema ]
})

module.exports = mongoose.model("Posts", PostSchema);
