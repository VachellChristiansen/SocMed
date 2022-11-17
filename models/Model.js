const mongoose = require('mongoose');
const path = require("path");
const Users = require(path.join(__dirname, './UserModel'));

mongoose.connect(
  'mongodb+srv://mildew:mildewdatabase@sandbox0.m9dl512.mongodb.net/test',
);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to mongoDB');
});

module.exports = {
  db,
  Users,
};