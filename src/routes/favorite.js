const express = require("express");
const favoriteController = require("../controllers/favorite");

const router = express.Router();
router.get("/add", favoriteController.addToFavorite);
router.get("/remove", favoriteController.removeFromFavorite);

module.exports = router;
