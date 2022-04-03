const purchaseService = require("../services/mogno/purchase");

async function getAllPurchases(req, res) {
  const purchases = await purchaseService.getAllPurchases(req.user.id);
  res.send({ purchases });
}

module.exports = { getAllPurchases };
