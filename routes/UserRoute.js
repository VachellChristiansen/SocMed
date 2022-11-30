const express = require("express");
const path = require("path");
const { celebrate } = require("celebrate");
const passport = require("passport");

const userValidator = require(path.join(__dirname, "../validators/UserValidator"));
const userAuth = require(path.join(__dirname, "../middlewares/UserAuth"));
const { 
  getUser, 
  createUser, 
  loginUser,
  getOtherUser,
  register,
  loginPage,
  loginFailed,
  logout,
  followFromOtherUser,
  unfollowFromOtherUser,
  editProfile,
  removeAccount,
  uploadPost,
  deletedUser
} = require(path.join(__dirname, "../controllers/UserController"));
const { upload } = require(path.join(__dirname, "../src/helpers/Upload"))

const router = express.Router();

// route here starts with "localhost/user/"

router.get("/", getUser);

router.get("/follow", followFromOtherUser);

router.get("/unfollow", unfollowFromOtherUser);

router.get("/register", register);

router.get("/login", loginPage); 

router.get("/loginFailed", loginFailed);

router.get("/logout", logout);

router.get("/remove", removeAccount)

router.get("/deleted", deletedUser)

router.get("/other/:user", getOtherUser);

router.post("/editProfile", celebrate(userValidator.edit), upload, editProfile); 

router.post("/createUser", celebrate(userValidator.register), upload, createUser);

router.post("/uploadPost", celebrate(userValidator.upload), upload, uploadPost);

router.post("/loginValidation", celebrate(userValidator.login), passport.authenticate('local', { failureRedirect: '/user/loginFailed' }), loginUser);

module.exports = router;