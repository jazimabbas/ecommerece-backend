const db = require("../models");
const Exceptions = require("../utils/custom-exceptions");

async function isShopAvailable(shopname) {
  return await db.Shop.findOne({ where: { name: shopname } });
}

async function createNewShop(shopFields) {
  const shopInDb = await db.Shop.findOne({ where: { name: shopFields.name } });
  if (shopInDb) {
    throw new Exceptions.BadRequestException("Shop already exists");
  }

  const newShop = new db.Shop({ ...shopFields });
  return newShop.save();
}

async function updateShop(shopId, shopFields) {
  const shopInDb = await db.Shop.findByPk(shopId);
  if (!shopInDb) {
    throw new Exceptions.NotFoundException("Shop not found");
  }

  try {
    return await db.Shop.update({ ...shopFields }, { where: { id: shopId } });
  } catch (err) {
    throw new Exceptions.BadRequestException("Shop already exists");
  }
}

module.exports = { isShopAvailable, createNewShop, updateShop };
