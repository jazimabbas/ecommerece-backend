const express = require("express");

const router = express.Router();
router.get("/", (req, res) => res.send("Ecommerece Backend App"));

module.exports = router;
