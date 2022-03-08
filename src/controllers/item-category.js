const validate = require("../utils/validations");
const validations = require("../utils/validations/item-category");
const categoryService = require("../services/item-category");

async function getAllCategories(req, res) {
  const categories = await categoryService.getAllCategoriesForShop(
    +req.params.shopId
  );
  res.send({ categories });
}

async function createItemCategory(req, res) {
  const cleanFields = await validate(
    validations.createCategorySchema,
    req.body
  );
  res.send(cleanFields);
}

async function updateItemCategory(req, res) {
  const cleanFields = await validate(
    validations.updateCategorySchema,
    req.body
  );
  res.send(cleanFields);
}

module.exports = { getAllCategories, createItemCategory, updateItemCategory };
