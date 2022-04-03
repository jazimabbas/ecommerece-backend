const validate = require("../utils/validations");
const validations = require("../utils/validations/shop");
const shopService = require("../services/mogno/shop");

async function checkShopAvailablity(req, res) {
  const cleanFields = await validate(
    validations.checkAvailablitySchema,
    req.body
  );
  const shop = await shopService.isShopAvailable(cleanFields.name);
  const isAvailable = shop ? false : true;
  res.send({ isAvailable });
}

async function shopExistsForUser(req, res) {
  const shop = await shopService.isShopExistsForUser(req.user.id);
  const isShopExists = shop ? true : false;
  res.send({ isShopExists });
}

async function getShopDetails(req, res) {
  const shop = await shopService.getShopDetails(req.user.id);
  res.send({ shop });
}

async function getSingleShopDetail(req, res) {
  const shop = await shopService.singleShopDetail(req.params.id);
  res.send({ shop });
}

async function getShopItems(req, res) {
  const items = await shopService.getShopItems(req.params.shopId);
  res.send({ items });
}

async function createShop(req, res) {
  console.log("shop fields: ", req.body);
  const cleanFields = await validate(validations.createShopSchema, req.body);
  const newShop = await shopService.createNewShop({
    ...cleanFields,
    userId: req.user.id,
  });
  res.send({ shop: newShop });
}

async function updateShop(req, res) {
  const image = req.file ? req.file.filename : "";
  const cleanFields = await validate(validations.updateShopSchema, req.body);
  const updatedShop = await shopService.updateShop(req.params.id, {
    ...cleanFields,
    image,
  });
  res.send({ shop: updatedShop });
}

module.exports = {
  checkShopAvailablity,
  shopExistsForUser,
  getShopDetails,
  getShopItems,
  createShop,
  updateShop,
  getSingleShopDetail,
};
