const validate = require("../utils/validations");
const validations = require("../utils/validations/item");
const itemService = require("../services/item");

async function createItem(req, res) {
  const cleanFields = await validate(validations.createItemSchema, req.body);
  // return res.send(cleanFields);
  const item = await itemService.createNewitem(cleanFields);
  res.send({ item });
}

module.exports = { createItem };
