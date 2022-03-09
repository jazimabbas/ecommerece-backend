const db = require("../models");
const Exceptions = require("../utils/custom-exceptions");

async function isShopAvailable(shopname) {
  return await db.Shop.findOne({ where: { name: shopname } });
}

async function isShopExistsForUser(userId) {
  return await db.Shop.findOne({ where: { userId } });
}

async function singleShopDetail(shopId) {
  return await db.Shop.findByPk(shopId, { include: db.Item });
}

async function getShopDetails(userId) {
  return await db.Shop.findOne({ where: { userId } });
}

async function getShopItems(shopId) {
  return db.Item.findAll({ where: { shopId }, include: db.ItemCategory });
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

module.exports = {
  isShopAvailable,
  isShopExistsForUser,
  getShopDetails,
  getShopItems,
  createNewShop,
  updateShop,
  singleShopDetail,
};
