const express = require("express");
const shopController = require("../controllers/shop");
const uploads = require("../utils/upload");

const router = express.Router();
router.post("/check-availablity", shopController.checkShopAvailablity);
router.post("/", shopController.createShop);
router.patch("/:id", uploads.single("image"), shopController.updateShop);

module.exports = router;
