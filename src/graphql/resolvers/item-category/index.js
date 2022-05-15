const categoryService = require("../../../services/mogno/item-category");

exports.createCategory = async function (categoryPayload) {
  const newCategory = await categoryService.createNewCategory(categoryPayload);
  return { data: JSON.stringify(newCategory) };
};
