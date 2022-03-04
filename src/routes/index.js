const express = require("express");
const authRoutes = require("./auth");
const userRoutes = require("./user");
const shopRoutes = require("./shop");

const router = express.Router();
router.get("/", (req, res) => res.send("Ecommerece Backend App"));
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/shop", shopRoutes);

module.exports = router;
