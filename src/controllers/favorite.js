const favService = require("../services/mogno/favorite");

async function getAllFavs(req, res) {
  const favorites = await favService.getAllFavs(req.user.id);
  const favItems = favorites.map((fav) => {
    return {
      name: fav.itemId.name,
      price: fav.itemId.price,
      featuredImage: fav.itemId.featuredImage,
    };
  });
  res.send({ favorites: favItems });
}

async function addToFavorite(req, res) {
  await favService.addToFav(req.user.id, req.params.itemId);
  res.send({ message: "Add to favorite" });
}

async function removeFromFavorite(req, res) {
  await favService.removeFromFav(req.user.id, req.params.itemId);
  res.send({ meessage: "Removed from favorite" });
}

module.exports = { getAllFavs, addToFavorite, removeFromFavorite };
