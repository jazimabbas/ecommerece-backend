const express = require("express");
const checkoutController = require("../controllers/checkout");
const isAuth = require("../middlewares/is-auth");

const router = express.Router();
router.post("/", isAuth, checkoutController.checkout);

module.exports = router;
