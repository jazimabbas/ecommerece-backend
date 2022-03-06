const validate = require("../utils/validations");
const validations = require("../utils/validations/shop");
const shopService = require("../services/shop");

async function checkShopAvailablity(req, res) {
  const cleanFields = await validate(
    validations.checkAvailablitySchema,
    req.body
  );
  const shop = await shopService.isShopAvailable(cleanFields.name);
  const isAvailable = shop ? false : true;
  res.send({ isAvailable });
}

async function createShop(req, res) {
  const image = req.file ? req.file.filename : "";
  const cleanFields = await validate(validations.createShopSchema, req.body);
  const newShop = await shopService.createNewShop({ ...cleanFields, image });
  res.send({ shop: newShop });
}

async function updateShop(req, res) {
  const cleanFields = await validate(validations.updateShopSchema, req.body);
  res.send({ cleanFields });
}

module.exports = { checkShopAvailablity, createShop, updateShop };
