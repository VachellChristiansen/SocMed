const jwt = require("jsonwebtoken");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const {check,validationResult} = require('express-validator');
const { Users } = require(path.join(__dirname, "../models/Model"));
const config = require(path.join(__dirname, "../src/core/config"));
const { hash, compare } = require(path.join(__dirname, "../src/helpers/Hash"));

async function create(email, username, name, password) {
  const hashedPassword = await hash(password);
  const newUser = new Users({
    email,
    username,
    name,
    password: hashedPassword,
  })
  return newUser.save();
}

async function findByEmail(email) {
  return Users.findOne({ email }).exec();
}

async function findByUsername(username) {
  return Users.findOne({ username }).exec();
}

async function login(username, password) {
  const user = await findByUsername(username);
  if(!user) {
    return null;
  }

  const passwordMatched = await compare(password, user.password);
  return passwordMatched ? user : null;
}

async function generateToken(id) {
  const payload = { id };
  return jwt.sign(payload, config.jwtSecretKey)
}

async function findById(id) {
  return Users.findById(id);
}

const createUser = async (req, res, next) => {
  try { // TODO : Check user is already registered?
    const existingUser = await findByEmail(req.body.email);
    const existingUsername = await findByUsername(req.body.username);
    const errors = validationResult(req);
    let messageError = " ";
    if(existingUser){
      messageError+="Email is already registered! "
    }
    if(existingUsername){
      messageError+="Username is already registered! "
    }
    if (existingUser||existingUsername) {
        res.render('User/register', 
  {
    error: {
      msg: messageError,
    }
  })
      }
     else {
    // register user (insert to db)
    await create(
      req.body.email,
      req.body.username,
      req.body.name,
      req.body.password,
    );
    return res.redirect('/user/login');
    }

  } catch (err) {
    return next(err);
  }
}

const getUser = async (req, res) => {
  res.render("User/mainUser");
}

const loginUser = async (req, res, next) => {
  try {
   
    const user = await login(req.body.username, req.body.password);
    const errors = validationResult(req);
    if (!user) {
        res.render('User/login', 
        {
          error: {
            msg: 'Wrong email or password!'
          }
        })
    } else {
      const token = await generateToken(user.id);
      return res.redirect('/');
    }
  } catch (err) {
    return next(err);
  }
}

const getOtherUser = async (req, res, next) => {
  res.render("User/otherUser")
};

const register = async (req, res, next) => {
  res.render('User/register', 
  {
    error: {
      msg: ' '
    }
  })
};

const loginPage = async (req, res, next) => {
  res.cookie('user_token', 'valeriemautoken')
  res.render('User/login', 
  {
    error: {
      msg: ' '
    }
  })
};

const editProfile = async (req, res, next) => {
  //do something
};

module.exports = {
  create,
  createUser,
  getUser,
  loginUser,
  findByEmail,
  login,
  generateToken,
  findById,
  // pages
  getOtherUser,
  register,
  loginPage,
};
