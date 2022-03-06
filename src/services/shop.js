const db = require("../models");
const Exceptions = require("../utils/custom-exceptions");

async function isShopAvailable(shopname) {
  return await db.Shop.findOne({ where: { name: shopname } });
}

module.exports = { isShopAvailable };
