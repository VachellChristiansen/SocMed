const express = require("express");
const path = require("path");
const router = express.Router();

const { getIndex, followFromIndex, unfollowFromIndex, privacyPolicy, search, upload, error, post } = require(path.join(__dirname, "../controllers/IndexController"));
const { check } = require(path.join(__dirname, "../middlewares/AccountCheck"));

// route here starts with "localhost/"

router.get("/", getIndex);
router.get("/follow", check, followFromIndex);
router.get("/unfollow", check, unfollowFromIndex);
router.get("/privacypolicy", privacyPolicy);
router.get("/search", search);
router.get("/upload", upload);
router.get("/error", error);
router.get("/post/:postId", post);

module.exports = router;
