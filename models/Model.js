require('dotenv').config();
const mongoose = require('mongoose');
const path = require("path");
const Users = require(path.join(__dirname, './UserModel'));
const Posts = require(path.join(__dirname, './PostModel'));
mongoose.connect( process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to mongoDB');
});

module.exports = {
  db,
  Users,
  Posts
};