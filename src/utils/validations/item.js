const yup = require("yup");

const createItemSchema = yup.object().shape({
  name: yup.string().required(),
  categoryId: yup.number().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  quantity: yup.number().required(),
  shopId: yup.number().required(),
});

module.exports = { createItemSchema };
