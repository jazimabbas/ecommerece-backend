const db = require("../models");
const Exceptions = require("../utils/custom-exceptions");

async function getAllCategoriesForShop(shopId) {
  return db.ItemCategory.findAll({ where: { shopId } });
}

async function createNewCategory(categoryFields) {
  const { name, shopId } = categoryFields;
  const categoryInDb = await db.ItemCategory.findOne({
    where: { name, shopId },
  });
  if (categoryInDb) {
    throw new Exceptions.BadRequestException(
      "Category already exists. Please try different"
    );
  }

  const newCategory = new db.ItemCategory(categoryFields);
  return await newCategory.save();
}

module.exports = { getAllCategoriesForShop, createNewCategory };
