const express = require("express");
const path = require("path");
const router = express.Router();
const userAuth = require(path.join(__dirname, "../middlewares/UserAuth"));

const { updateProfile, indexsetting } = require(path.join(__dirname, "../controllers/SettingsController"))

// route here starts with "localhost/setting/"

router.get('/', indexsetting);

router.post('/updateprofile', userAuth, updateProfile);

module.exports = router;