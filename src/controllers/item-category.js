const validate = require("../utils/validations");
const validations = require("../utils/validations/item-category");
const categoryService = require("../services/mogno/item-category");

async function getAllCategories(req, res) {
  const categories = await categoryService.getAllCategoriesForShop(
    req.params.shopId
  );
  res.send({ categories });
}

async function createItemCategory(req, res) {
  const cleanFields = await validate(
    validations.createCategorySchema,
    req.body
  );
  const newCategory = await categoryService.createNewCategory(cleanFields);
  res.send({ category: newCategory });
}

async function updateItemCategory(req, res) {
  const cleanFields = await validate(
    validations.updateCategorySchema,
    req.body
  );
  await categoryService.updateCategory(req.params.id, cleanFields);
  res.send({ message: "Successfully update the item category" });
}

module.exports = { getAllCategories, createItemCategory, updateItemCategory };
