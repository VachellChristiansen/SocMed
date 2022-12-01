const path = require('path');

const express = require("express");

const cors = require("cors");

const passport = require("passport");

const fileupload = require('express-fileupload')

const { errors } = require("celebrate");

const { sessionData } = require(path.join(__dirname, '../helpers/Session'));

const { isFollowed, isLiked, checkUser } = require(path.join(__dirname, '../helpers/Local'));

const app = express();

app.enable("trust proxy");

app.use(cors());

app.use(fileupload());

app.use(sessionData);

app.use(passport.initialize());

app.use(passport.session());

app.use(require('method-override')());

app.use(express.json());

app.use(express.urlencoded({ extended:false }));

//local functions
app.locals.isFollowed = isFollowed;
app.locals.isLiked = isLiked;
app.locals.checkUser = checkUser;

app.use((err, req, res, next) => {
  console.error(err.stack);
  next(err);
})

app.use(errors());

app.use((err, req, res, next) => {
  if (err.status === 401) {
    return res.status(err.status)
      .send({
        statusCode: 401,
        error: 'Unauthorized access',
        message: err.message,
      })
      .end();
  }
  
  return res.status(err.status || 500)
    .send({
      statusCode: err.status || 500,
      error: 'Internal server error',
      message: err.message,
    })
    .end();
});

module.exports = app;
