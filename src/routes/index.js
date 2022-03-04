const express = require("express");
const authRoutes = require("./auth");
const userRoutes = require("./user");
const shopRoutes = require("./shop");
const itemRoutes = require("./item");
const favoriteRoutes = require("./favorite");
const itemCategoryRoutes = require("./item-category");

const router = express.Router();
router.get("/", (req, res) => res.send("Ecommerece Backend App"));
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/shop", shopRoutes);
router.use("/item", itemRoutes);
router.use("/fav", favoriteRoutes);
router.use("/item-category", itemCategoryRoutes);

module.exports = router;
