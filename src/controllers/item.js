const validate = require("../utils/validations");
const validations = require("../utils/validations/item");
const itemService = require("../services/item");

async function filteredItems(req, res) {
  const items = await itemService.filteredItems({ ...req.body });
  res.send({ items });
}

async function singleItem(req, res) {
  const item = await itemService.singleItem(+req.params.id);
  res.send({ item });
}

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

module.exports = { filteredItems, singleItem, createItem };
