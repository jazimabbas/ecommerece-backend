const express = require("express");
const itemController = require("../controllers/item");
const uploads = require("../utils/upload");

const router = express.Router();
router.post("/", uploads.array("image", 3), itemController.createItem);

module.exports = router;
