const validate = require("../utils/validations");
const validations = require("../utils/validations/item");

async function createItem(req, res) {
  const cleanFields = await validate(validations.createItemSchema, req.body);
  res.send(cleanFields);
}

module.exports = { createItem };
