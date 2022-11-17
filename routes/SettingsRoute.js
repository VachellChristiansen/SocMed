const express = require("express");
const path = require("path");
const router = express.Router();
const userAuth = require(path.join(__dirname, "../middlewares/UserAuth"));

const { changePass, editProfile, help, manageAccount, updateProfile, privacy } = require(path.join(__dirname, "../controllers/SettingsController"))

// route here starts with "localhost/setting/"

router.get('/changepass', changePass);
router.get('/editprofile', editProfile);
router.get('/help', help);
router.get('/manageaccount', manageAccount);
router.get('/privacy', privacy);

router.post('/updateprofile', userAuth, updateProfile);

module.exports = router;