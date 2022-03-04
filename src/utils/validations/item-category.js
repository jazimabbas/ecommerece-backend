const yup = require("yup");

const createCategorySchema = yup.object().shape({
  name: yup.string().required(),
  shop: yup.number().required(),
});

module.exports = { createCategorySchema };
