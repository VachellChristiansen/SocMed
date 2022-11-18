const express = require("express");
const path = require("path");
const router = express.Router();
const userAuth = require(path.join(__dirname, "../middlewares/UserAuth"));

const { indexsetting, updateProfile } = require(path.join(__dirname, "../controllers/SettingsController"))

// route here starts with "localhost/setting/"

router.post('/updateprofile', userAuth, updateProfile);
router.get('/:type', indexsetting);

module.exports = router;