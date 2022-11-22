require('dotenv').config();
const MongoStore = require('connect-mongo')
const session = require('express-session')

const sessionStore = MongoStore.create({
  mongoUrl: process.env.MONGO_DB_URI
})

const sessionData = session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 24 * 60 * 60
  }
})

module.exports = {
  sessionData
}