const express = require("express");
const itemCategoryController = require("../controllers/item-category");

const router = express.Router();
router.post("/", itemCategoryController.createItemCategory);
router.patch("/:id", itemCategoryController.updateItemCategory);

module.exports = router;
