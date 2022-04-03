const yup = require("yup");

const createItemSchema = yup.object().shape({
  name: yup.string().required(),
  categoryId: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  quantity: yup.number().required(),
  shopId: yup.string().required(),
});

const updateItemSchema = yup.object().shape({
  price: yup.number().min(1).required(),
});

module.exports = { createItemSchema, updateItemSchema };
