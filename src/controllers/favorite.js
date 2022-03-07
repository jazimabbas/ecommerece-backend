const favService = require("../services/favorite");

async function getAllFavs(req, res) {
  const favorites = await favService.getAllFavs(+req.user.id);
  const favItems = favorites.map((fav) => {
    return {
      id: fav.Item.id,
      name: fav.Item.name,
      price: fav.Item.price,
      featuredImage: fav.Item.featuredImage,
    };
  });
  res.send({ favorites: favItems });
}

async function addToFavorite(req, res) {
  await favService.addToFav(+req.user.id, +req.params.itemId);
  res.send({ message: "Add to favorite" });
}

async function removeFromFavorite(req, res) {
  await favService.removeFromFav(+req.user.id, +req.params.itemId);
  res.send({ meessage: "Removed from favorite" });
}

module.exports = { getAllFavs, addToFavorite, removeFromFavorite };
