const db = require("../../db");

async function getAllFavs(userId) {
  return db.Favorite.find({ userId }).populate("itemId");
}

async function addToFav(userId, itemId) {
  return db.Favorite.create({ userId, itemId });
}

async function removeFromFav(userId, itemId) {
  return db.Favorite.findOneAndDelete({ userId, itemId });
}

module.exports = { getAllFavs, addToFav, removeFromFav };
