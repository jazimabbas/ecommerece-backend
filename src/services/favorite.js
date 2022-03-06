const db = require("../models");
const Exceptions = require("../utils/custom-exceptions");

async function addToFav(userId, itemId) {
  return db.Favorite.create({ userId, itemId });
}

module.exports = { addToFav };
