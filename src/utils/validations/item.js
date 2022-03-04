const yup = require("yup");

const createItemSchema = yup.object().shape({
  name: yup.string().required(),
  category: yup.number().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  quantity: yup.number().required(),
  shop: yup.number().required(),
});

module.exports = { createItemSchema };
