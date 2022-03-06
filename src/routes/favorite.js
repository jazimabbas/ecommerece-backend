const express = require("express");
const favoriteController = require("../controllers/favorite");
const isAuth = require("../middlewares/is-auth");

const router = express.Router();
router.get("/add/:itemId", isAuth, favoriteController.addToFavorite);
router.get("/remove/:itemId", isAuth, favoriteController.removeFromFavorite);

module.exports = router;
