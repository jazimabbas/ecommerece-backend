const express = require("express");
const shopController = require("../controllers/shop");
const uploads = require("../utils/upload");

const router = express.Router();
router.post("/check-availablity", shopController.checkShopAvailablity);
router.post("/", uploads.single("image"), shopController.createShop);
router.patch("/:id", shopController.updateShop);

module.exports = router;
