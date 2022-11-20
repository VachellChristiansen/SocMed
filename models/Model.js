const mongoose = require('mongoose');
const path = require("path");
const Users = require(path.join(__dirname, './UserModel'));

mongoose.connect(
  'mongodb+srv://valerie36:535210036@cluster1.4kx4cuh.mongodb.net/test',
);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to mongoDB');
});

module.exports = {
  db,
  Users,
};