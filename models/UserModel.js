const mongoose = require("mongoose");

const FollowerSchema = mongoose.Schema({ username: String })
const FollowingSchema = mongoose.Schema({ username: String })
const PostSchema = mongoose.Schema({ postId: String })

const UserSchema = mongoose.Schema({
  email: String,
  username: String,
  name: String,
  password: String,
  bio: String,
  image: String,
  phone: Number,
  status: String,
  postId: [ PostSchema ],
  followers: [ FollowerSchema ],
  following: [ FollowingSchema ]
})


module.exports = mongoose.model("Users", UserSchema);
