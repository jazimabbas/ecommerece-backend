const db = require("../models");
const Exceptions = require("../utils/custom-exceptions");

async function getAllFavs(userId) {
  return db.Favorite.findAll({ where: { userId }, include: db.Item });
}

async function addToFav(userId, itemId) {
  return db.Favorite.create({ userId, itemId });
}

async function removeFromFav(userId, itemId) {
  return db.Favorite.destroy({ where: { userId, itemId } });
}

module.exports = { getAllFavs, addToFav, removeFromFav };
