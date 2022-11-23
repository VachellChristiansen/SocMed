//import from dependencies
const jwt = require("jsonwebtoken");
const path = require("path");
const express = require("express");
const {check,validationResult} = require('express-validator');

//import from source files
const { Users, Posts } = require(path.join(__dirname, "../models/Model"));
const config = require(path.join(__dirname, "../src/core/config"));
const { hash, compare } = require(path.join(__dirname, "../src/helpers/Hash"));
const { upload } = require(path.join(__dirname, "../src/helpers/Upload"));

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

async function uploadPost(username, title, music, file) {
  const newUpload = new Posts({
    username,
    title,
    music,
    file,
  })
  return newUpload.save();
}

async function findByEmail(email) {
  return Users.findOne({ email }).exec();
}

async function findByUsername(username) {
  return Users.findOne({ username }).exec();
}

async function findById(id) {
  return Users.findById(id);
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
  console.log(req.user)
  res.render("User/mainUser", {name: req.user.name, username: req.user.username, email: req.user.email, bio: req.user.bio || ''});
}

const loginUser = async (req, res, next) => {
  // try {
   
  //   const user = await login(req.body.username, req.body.password);
  //   const errors = validationResult(req);
  //   if (!user) {
  //       res.render('User/login', 
  //       {
  //         error: {
  //           msg: 'Wrong username or password!'
  //         }
  //       })
  //   } else {
  //     const token = await generateToken(user.id);
  //     res.cookie('user_token', token);
  //     return res.redirect('/');
  //   }
  // } catch (err) {
  //   return next(err);
  // }

  const user = await Users.findOne({ username: req.body.username }).exec();
  if (!user) {
    return res.json({
      error: 'User not found'
    })
  }
  const validPassword = await compare(req.body.password, user.password);
  if (!validPassword) {
    return res.json({
      error: 'Invalid password'
    })
  }
  return res.redirect('/user')
}

const logout = async (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    return res.redirect('/user/login');
  });
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
  res.render('User/login', 
  {
    error: {
      msg: ' '
    }
  })
};

const editProfile = async (req, res, next) => {
  const user = await findById(req.user.id);
  
  user.name = req.body.name || req.user.name;
  user.email = req.body.email || req.user.email;
  user.username = req.body.username || req.user.username;
  user.bio = req.body.bio || req.user.bio;

  await user.save();
  res.redirect('/user')
};

const createPost = async (req, res, next) => {
  try { // TODO : Check user is already registered?
    console.log(req.body);
    // register user (insert to db)
    await uploadPost(
      req.body.username,
      req.body.title,
      req.body.music,
      req.body.file,
    );
    // return res.json({
    //   username : req.body.username, 
    //   title : req.body.title,
    //   music :  req.body.music,
    //   file : req.body.file

    // })

    return res.render('index');
  } catch (err) {
    return next(err);
  }
};

const insertComment = async (req, res, next) => {

};

module.exports = {
  create,
  findByEmail,
  login,
  findById,
  generateToken,
  // callback functions for routes
  getUser,
  createUser,
  loginUser,
  logout,
  editProfile,
  //posts
  createPost,
  insertComment,
  // pages
  getOtherUser,
  register,
  loginPage,
};
