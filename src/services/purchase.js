const db = require("../models");

async function getAllPurchases(userId) {
  return db.Purchase.findAll({ where: { userId }, include: db.Shop });
}

module.exports = { getAllPurchases };
