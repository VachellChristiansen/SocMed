const express = require("express");
const path = require("path");
const router = express.Router();

const { getIndex, privacyPolicy, search, upload } = require(path.join(__dirname, "../controllers/IndexController"));

// route here starts with "localhost/"

router.get("/", getIndex);
router.get("/privacypolicy", privacyPolicy);
router.get("/search", search);
router.get("/upload", upload);

module.exports = router;
