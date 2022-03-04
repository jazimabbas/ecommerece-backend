const yup = require("yup");

const createCategorySchema = yup.object().shape({
  name: yup.string().required(),
  shop: yup.number().required(),
});

const updateCategorySchema = yup.object().shape({
  name: yup.string().required(),
});

module.exports = { createCategorySchema, updateCategorySchema };
