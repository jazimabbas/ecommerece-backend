const express = require("express");
const itemController = require("../controllers/item");
const uploads = require("../utils/upload");

const router = express.Router();
router.get("/", itemController.listAllItems);
router.post("/filter", itemController.filteredItems);
router.get("/:id", itemController.singleItem);
router.post(
  "/",
  uploads.fields([{ name: "featured", maxCount: 1 }]),
  itemController.createItem
);
router.patch("/:id", itemController.updateItem);

module.exports = router;
