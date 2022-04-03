const db = require("../../db");
const Exceptions = require("../../utils/custom-exceptions");

async function getAllCategoriesForShop(shopId) {
  return db.ItemCategory.find({ shopId });
}

async function createNewCategory(categoryFields) {
  const { name, shopId } = categoryFields;

  const categoryInDb = await db.ItemCategory.findOne({ name, shopId });
  if (categoryInDb) {
    throw new Exceptions.BadRequestException(
      "Category already exists. Please try different"
    );
  }

  const newCategory = new db.ItemCategory(categoryFields);
  return await newCategory.save();
}

async function updateCategory(categoryId, categoryFields) {
  let categoryInDb = await db.ItemCategory.findByPk(categoryId);
  if (!categoryInDb) {
    throw new Exceptions.NotFoundException("Item category not found");
  }

  const { name, shopId } = categoryFields;
  categoryInDb = await db.ItemCategory.findOne({
    where: { name, shopId, id: !categoryId },
  });
  if (categoryInDb) {
    throw new Exceptions.BadRequestException(
      "Category already exists. Please try different"
    );
  }

  await db.ItemCategory.update(categoryFields, { where: { id: categoryId } });
}

module.exports = { getAllCategoriesForShop, createNewCategory, updateCategory };
