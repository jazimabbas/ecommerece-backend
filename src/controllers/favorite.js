const favService = require("../services/favorite");

async function addToFavorite(req, res) {
  await favService.addToFav(+req.user.id, +req.params.itemId);
  res.send({ message: "Add to favorite" });
}

async function removeFromFavorite(req, res) {
  res.send("remove from fav");
}

module.exports = { addToFavorite, removeFromFavorite };
