const express = require("express");
const path = require("path");
const router = express.Router();

const { postComment } = require(path.join(__dirname, "../controllers/PostController"));

// route here starts with "localhost/"

router.post("/postComment", postComment);

module.exports = router;
