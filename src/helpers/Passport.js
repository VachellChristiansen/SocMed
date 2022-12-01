const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { compare } = require(path.join(__dirname, './Hash'));
const { db, Users } = require(path.join(__dirname, '../../models/Model'))

const fields = {
  usernameField: 'username',
  passwordField: 'password',
}

const verifyCallback = (username, password, callback) => {
  Users.findOne({ username: username })
  .then((user) => {
    if (!user) { return callback(null, false)}
    const isValid = compare(password, user.password);
    const isActive = user.status == '99';
    if (isValid && isActive) {
      return callback(null, user)
    } else {
      return callback(null, false);
    }
  })
  .catch((err) => {
    callback(err);
  });
}

const strategy = new LocalStrategy(fields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((userId, done) => {
  Users.findById(userId)
  .then((user) => {
    done(null, user);
  })
  .catch(err => done(err));
})