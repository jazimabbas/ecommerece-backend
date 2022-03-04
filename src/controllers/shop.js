const validate = require("../utils/validations");
const validations = require("../utils/validations/shop");

async function checkShopAvailablity(req, res) {
  const cleanFields = await validate(
    validations.checkAvailablitySchema,
    req.body
  );
  res.send({ cleanFields });
}

async function createShop(req, res) {
  const cleanFields = await validate(validations.createShopSchema, req.body);
  res.send({ cleanFields });
}

async function updateShop(req, res) {
  const cleanFields = await validate(validations.updateShopSchema, req.body);
  res.send({ cleanFields });
}

module.exports = { checkShopAvailablity, createShop, updateShop };
