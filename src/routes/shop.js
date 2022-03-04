const express = require("express");
const shopController = require("../controllers/shop");

const router = express.Router();
router.post("/check-availablity", shopController.checkShopAvailablity);
router.post("/", shopController.createShop);
router.patch("/:id", shopController.updateShop);

module.exports = router;
