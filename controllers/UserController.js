//import from dependencies
const jwt = require("jsonwebtoken");
const path = require("path");
const express = require("express");
const { check, validationResult} = require('express-validator');
const { log } = require("console");

//import from source files
const { Users, Posts } = require(path.join(__dirname, "../models/Model"));
const config = require(path.join(__dirname, "../src/core/config"));
const { hash, compare } = require(path.join(__dirname, "../src/helpers/Hash"));
const { follow, unfollow } = require(path.join(__dirname, "../src/helpers/Follow"));

async function create(email, username, name, password, userImage) {
  const hashedPassword = await hash(password);
  const newUser = new Users({
    email,
    username,
    name,   
    password: hashedPassword,
    image: userImage,
    status: '99'
  })
  return newUser.save();
}

async function createPost(userId, title, music, file) {
  const newUpload = new Posts({
    userId,
    title,
    music,
    file,
  })
  const user = await Users.findById(userId).exec();
  //saving
  await user.postId.push({ postId: newUpload.id });
  await user.save();
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
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errorExists = false;
    let messageError = " ";
    let userError = "Username" ;
    let nameError = "Name";
    let pwError = "Password";
    let confPwError = "Confirm Password";
    let emailError = "Email";
   
    if(req.body.username.length < 3) {
      userError = "Username must be at least 3 characters";
      errorExists = true;
    }
    if(req.body.name.length < 3) {
    nameError = "Name must be at least 3 characters";   
    errorExists = true; 
    }
    if(req.body.password.length < 6) {
    pwError = "Password must be at least 6 characters"; 
    errorExists = true;  
    }
    if(req.body.confirmPassword.length < 6) {
    confPwError = "Password must be at least 6 characters";
    errorExists = true; 
    }
    if(req.body.email.length < 1 || !emailReg.test(req.body.email)) {
    emailError = "Proper email is required";
    errorExists = true; 
    }

    if(existingUser){
      messageError+="Email is already registered! "
      errorExists = true; 
    }
    if(existingUsername){
      messageError+="Username is already registered! "
      errorExists = true; 
    }
    if (errorExists) {
        res.render('User/register', 
  {
    error: {
      msg: messageError,
    },
    username: userError,
    name: nameError,
    password: pwError,
    confirmPassword: confPwError,
    email: emailError,

  })
}

     else {
    // register user (insert to db)
    await create(
      req.body.email,
      req.body.username,
      req.body.name,
      req.body.password,
      defaultUserImage,
    );
    return res.redirect('/user/login');
    }

  } catch (err) {

    return res.render('User/register', 
    {
      error: {msg: 'Invalid registration'},
      username: 'Username must be at least 3 characters',
      name: 'Name must be at least 3 characters',
      password: 'Password must be at least 6 characters',
      confirmPassword: 'Password must be at least 6 characters',
      email: 'Email is required',
  
    });
    
    // return next(err);
  }
}

const getUser = async (req, res) => {
  // console.log(req.user)
  const videos = await Posts.find({ userId: req.user.id })
  // console.log(videos)
  res.render("User/mainUser", {
    name: req.user.name,
    username: req.user.username,
    email: req.user.email,
    bio: req.user.bio || '',
    image: req.user.image,
    videos: videos
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
  if(!otherUser) { return next() }
  if (otherUser.status == '00') {
    console.log('dead account')
    return res.redirect('/user/deleted')
  }
  const top = await Users.find({}).sort({ followers: -1 }).limit(3).exec();
  const recommended = await Users.find({ 'followers.username': { $ne: req.user.username } }).limit(3).exec();


  const followersCount = otherUser.followers.length;
  const followingCount = otherUser.following.length;
  const videos = await Posts.find({ userId: otherUser.id })
  // console.log(videos)

  res.render("User/otherUser", { 
    data: otherUser, 
    current: req.user.username,
    followersCount,
    followingCount,
    videos,
    top,
    recommended
  })
};

const register = async (req, res, next) => {
  res.render('User/register', 
  {
    error: {
      msg: ' '
    },
    username: 'Username',
    name: 'Name',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    email: 'Email'
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

const registerFailed = async (req, res, next) => {
  res.render('user/register', 
  {
    error: {msg: 'Invalid registration'},
    username: 'Username must be at least 3 characters',
    name: 'Name must be at least 3 characters',
    password: 'Password must be at least 6 characters',
    confirmPassword: 'Password must be at least 6 characters',
    email: 'Email is required',
  })
}

const editProfile = async (req, res, next) => {
  const user = await findById(req.user.id);
  
  user.image = req.body.upload || req.user.image;
  user.name = req.body.name || req.user.name;
  user.email = req.body.email || req.user.email;
  user.username = req.body.username || req.user.username;
  user.bio = req.body.bio || req.user.bio;

  await user.save();
  res.redirect('/user')
};

const uploadPost = async (req, res, next) => {
  try {
    await createPost(
      req.user.id,
      req.body.title,
      req.body.music,
      req.body.upload,
    );

    return res.redirect('/user');
  } catch (err) {
    return next(err);
  }
};

const followFromOtherUser = async (req, res, next) => {

  await follow(req.user.id, req.query.follow);
  const user = await Users.findById(req.query.follow).exec();

  res.redirect('/user/other/' + req.query.from);
};

const unfollowFromOtherUser = async (req, res, next) => {

  await unfollow(req.user.id, req.query.unfollow);
  const user = await Users.findById(req.query.unfollow).exec();

  res.redirect('/user/other/' + req.query.from);
};

const removeAccount = async (req, res, next) => {
  const user = await Users.findById(req.query.userId).exec();
  const posts = await Posts.deleteMany({ userId: user.id});
  user.status = '00';
  await user.save();
  console.log(user.username + ' has been deactivated')
  console.log(posts + ' posts deleted')
  res.redirect('/user/logout')
}

const deletedUser = async (req, res, next) => {
  res.render('User/deleted')
}

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
  followFromOtherUser,
  unfollowFromOtherUser,
  registerFailed,
  removeAccount,
  //posts
  uploadPost,
  // pages
  getOtherUser,
  register,
  loginPage,
  deletedUser
};
