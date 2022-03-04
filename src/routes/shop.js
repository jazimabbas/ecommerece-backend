const express = require("express");
const shopController = require("../controllers/shop");

const router = express.Router();
router.post("/check-availablity", shopController.checkShopAvailablity);

module.exports = router;
