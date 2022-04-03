const yup = require("yup");

const createCategorySchema = yup.object().shape({
  name: yup.string().required(),
  shopId: yup.string().required(),
});

const updateCategorySchema = yup.object().shape({
  name: yup.string().required(),
  shopId: yup.string().required(),
});

module.exports = { createCategorySchema, updateCategorySchema };
