const express = require("express");
const itemCategoryController = require("../controllers/item-category");
const isAuth = require("../middlewares/is-auth");

const router = express.Router();
router.get("/:shopId", isAuth, itemCategoryController.getAllCategories);
router.post("/", itemCategoryController.createItemCategory);
router.patch("/:id", itemCategoryController.updateItemCategory);

module.exports = router;
