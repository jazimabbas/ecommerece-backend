const db = require("../../db");

async function getAllPurchases(userId) {
  return db.Purchase.find({ userId }).populate("shopId");
}

module.exports = { getAllPurchases };
