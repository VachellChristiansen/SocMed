//import from dependencies
const jwt = require("jsonwebtoken");
const path = require("path");
const express = require("express");
const {check,validationResult} = require('express-validator');

//import from source files
const { Users, Posts } = require(path.join(__dirname, "../models/Model"));
const config = require(path.join(__dirname, "../src/core/config"));
const { hash, compare } = require(path.join(__dirname, "../src/helpers/Hash"));

async function create(email, username, name, password, userImage) {
  const hashedPassword = await hash(password);
  const newUser = new Users({
    email,
    username,
    name,   
    password: hashedPassword,
    image: userImage
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
    const defaultUserImage = 'https://w3s.link/ipfs/bafybeid4piao23t6dbqmb2v3vrkmwzhjy6dnict37af6xz5xjfd7542soa/default-user.png'
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
      defaultUserImage
    );
    return res.redirect('/user/login');
    }

  } catch (err) {
    return next(err);
  }
}

const getUser = async (req, res) => {
  // console.log(req.user)
  res.render("User/mainUser", {
    name: req.user.name,
    username: req.user.username,
    email: req.user.email,
    bio: req.user.bio || '',
    image: req.user.image
  });
}

const loginUser = async (req, res, next) => {
  const user = await Users.findOne({ username: req.body.username }).exec();
  const validPassword = await compare(req.body.password, user.password);
  if (!validPassword) {
    return res.render('User/login', {error: {msg: 'Invalid password'}})
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
  const otherUser = await Users.findOne({ username: req.params.user }).exec();
  const followersCount = otherUser.followers.length;
  const followingCount = otherUser.following.length;
  console.log(otherUser)

  const current = req.user.username
  res.render("User/otherUser", { 
    data: otherUser, 
    current: current,
    followersCount: followersCount,
    followingCount: followingCount })
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

const loginFailed = async (req, res, next) => {
  res.render('User/login', 
  {
    error: {msg: 'User does not Exist'}
  })
}

const editProfile = async (req, res, next) => {
  const user = await findById(req.user.id);
  
  user.image = req.body.image || req.user.image;
  user.name = req.body.name || req.user.name;
  user.email = req.body.email || req.user.email;
  user.username = req.body.username || req.user.username;
  user.bio = req.body.bio || req.user.bio;

  await user.save();
  res.redirect('/user')
};

const createPost = async (req, res, next) => {
  try {
    console.log(req.body);
    await uploadPost(
      req.body.username,
      req.body.title,
      req.body.music,
      req.body.file,
    );

    return res.render('index');
  } catch (err) {
    return next(err);
  }
};

const insertComment = async (req, res, next) => {

};

const follow = async (req, res, next) => {
  const follow = req.query.follow;
  const followUser = await Users.findOne({ username: follow }).exec();
  const mainUser = await Users.findOne({ username: req.user.username }).exec();
  //checking
  const followerExists = await followUser.followers.find((acc) => { return acc.username == req.user.username })
  if (followerExists) {
    return res.redirect('accounts')
  }
  //saving
  await followUser.followers.push({ username: req.user.username });
  await mainUser.following.push({ username: follow })
  await followUser.save();
  await mainUser.save();
  res.redirect('/user/other/' + follow);
};

const unfollow = async (req, res, next) => {
  const unfollow = req.query.unfollow;
  const followUser = await Users.findOne({ username: unfollow }).exec();
  const mainUser = await Users.findOne({ username: req.user.username }).exec();
  //saving
  await followUser.followers.pull({ username: req.user.username });
  await mainUser.following.pull({ username: unfollow })
  await followUser.save();
  await mainUser.save();
  res.redirect('/user/other/' + unfollow);
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
  loginFailed,
  logout,
  editProfile,
  follow,
  unfollow,
  //posts
  uploadPost,
  insertComment,
  // pages
  getOtherUser,
  register,
  loginPage,
};
