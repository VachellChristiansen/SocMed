const express = require("express");
const path = require("path");
const router = express.Router();

const { getIndex, followFromIndex, unfollowFromIndex, privacyPolicy, search, upload, error } = require(path.join(__dirname, "../controllers/IndexController"));

// route here starts with "localhost/"

router.get("/", getIndex);
router.get("/follow", followFromIndex);
router.get("/unfollow", unfollowFromIndex);
router.get("/privacypolicy", privacyPolicy);
router.get("/search", search);
router.get("/upload", upload);
router.get("/error", error);

module.exports = router;
