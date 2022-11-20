const express = require("express");
const path = require("path");
const { celebrate } = require("celebrate");

const userValidator = require(path.join(__dirname, "../validators/UserValidator"));
const userAuth = require(path.join(__dirname, "../middlewares/UserAuth"));
const { getUser, 
  createUser, 
  loginUser, 
  getOtherUser,
  register,
  loginPage,
  editProfile
} = require(path.join(__dirname, "../controllers/UserController"));

const router = express.Router();

// route here starts with "localhost/user/"

router.get("/", getUser); // add userAuth when session data is available

router.get("/otheruser", getOtherUser); // will need to be changed to other user username

router.get("/register", register);

router.get("/login", loginPage);

// router.post("/editProfile", celebrate(userValidator.edit), editProfile);

router.post("/createUser", celebrate(userValidator.register), createUser);

router.post("/loginValidation", celebrate(userValidator.login), loginUser);

module.exports = router;