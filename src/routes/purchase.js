const express = require("express");
const purchaseController = require("../controllers/purchase");
const isAuth = require("../middlewares/is-auth");

const router = express.Router();
router.get("/", isAuth, purchaseController.getAllPurchases);

module.exports = router;
