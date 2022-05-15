const categoryService = require("../../../services/mogno/item-category");

exports.allCategories = async function (categoryPayload) {
  const categories = await categoryService.getAllCategoriesForShop(
    categoryPayload.shopId
  );
  return { data: JSON.stringify(categories) };
};

exports.createCategory = async function (categoryPayload) {
  const newCategory = await categoryService.createNewCategory(categoryPayload);
  return { data: JSON.stringify(newCategory) };
};

exports.updateCategory = async function (categoryPayload) {
  const { id, ...fields } = categoryPayload;
  await categoryService.updateCategory(id, fields);
  return { message: "Successfully update the item category" };
};
