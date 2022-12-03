const express = require("express");
const path = require("path");
const router = express.Router();

const { getIndex, followFromIndex, unfollowFromIndex, likeFromIndex, unlikeFromIndex, privacyPolicy, search, upload, error, post } = require(path.join(__dirname, "../controllers/IndexController"));
const { check } = require(path.join(__dirname, "../middlewares/AccountCheck"));

// route here starts with "localhost/"
