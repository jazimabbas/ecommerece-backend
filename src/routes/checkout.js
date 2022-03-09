const express = require("express");
const checkoutController = require("../controllers/checkout");

const router = express.Router();
router.post("/", checkoutController.checkout);

module.exports = router;
