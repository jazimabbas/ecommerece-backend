const db = require("../models");

async function getAllCategoriesForShop(shopId) {
  return db.ItemCategory.findAll({ where: { shopId } });
}

module.exports = { getAllCategoriesForShop };
