const express = require("express");
const itemCategoryController = require("../controllers/item-category");

const router = express.Router();
router.post("/", itemCategoryController.createItemCategory);

module.exports = router;
