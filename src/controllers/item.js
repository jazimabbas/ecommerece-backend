const validate = require("../utils/validations");
const validations = require("../utils/validations/item");
const itemService = require("../services/item");

async function createItem(req, res) {
  const cleanFields = await validate(validations.createItemSchema, req.body);
  const featuredImage = req.files.featured[0].filename;
  const images = req.files.image.map((file) => file.filename);
  const item = await itemService.createNewitem({
    ...cleanFields,
    images,
    featuredImage,
  });
  res.send({ item });
}

module.exports = { createItem };
