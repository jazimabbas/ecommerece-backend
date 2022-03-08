const yup = require("yup");

const createCategorySchema = yup.object().shape({
  name: yup.string().required(),
  shopId: yup.number().required(),
});

const updateCategorySchema = yup.object().shape({
  name: yup.string().required(),
  shopId: yup.number().required(),
});

module.exports = { createCategorySchema, updateCategorySchema };
