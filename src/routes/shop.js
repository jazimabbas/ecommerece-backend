const express = require("express");
const shopController = require("../controllers/shop");
const uploads = require("../utils/upload");
const isAuth = require("../middlewares/is-auth");

const router = express.Router();
router.get("/is-shop-exists", isAuth, shopController.shopExistsForUser);
router.get("/:shopId", shopController.getShopItems);
router.get("/", isAuth, shopController.getShopDetails);
router.post("/check-availablity", shopController.checkShopAvailablity);
router.post("/", isAuth, shopController.createShop);
router.patch("/:id", uploads.single("image"), shopController.updateShop);

module.exports = router;
