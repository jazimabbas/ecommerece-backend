const validate = require("../utils/validations");
const validations = require("../utils/validations/item-category");

async function createItemCategory(req, res) {
  const cleanFields = await validate(validations.createCategorySchema, req.body);
  res.send(cleanFields);
}

module.exports = { createItemCategory };
