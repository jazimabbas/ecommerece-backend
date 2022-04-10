const db = require("../../db");
const Exceptions = require("../../utils/custom-exceptions");

async function isShopAvailable(shopname) {
  return await db.Shop.findOne({ name: shopname });
}

async function isShopExistsForUser(userId) {
  return await db.Shop.findOne({ userId });
}

async function singleShopDetail(shopId) {
  //   return await db.Shop.findByPk(shopId, { include: db.Item });
  // TODO: must populate item
  return await db.Shop.findById(shopId);
}

async function getShopDetails(userId) {
  return await db.Shop.findOne({ userId });
}

async function getShopItems(shopId) {
  return db.Item.find({ shopId }).populate("categoryId");
}

async function createNewShop(shopFields) {
  const shopInDb = await db.Shop.findOne({ name: shopFields.name });

  if (shopInDb) {
    throw new Exceptions.BadRequestException("Shop already exists");
  }

  const newShop = new db.Shop({ ...shopFields });
  return newShop.save();
}

async function updateShop(shopId, shopFields) {
  const shopInDb = await db.Shop.findById(shopId);
  if (!shopInDb) {
    throw new Exceptions.NotFoundException("Shop not found");
  }

  try {
    return await db.Shop.findOneAndUpdate({ _id: shopId }, { ...shopFields }, { upsert: true});
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
