const yup = require("yup");

const checkAvailablitySchema = yup.object().shape({
  name: yup.string().required(),
});

const createShopSchema = yup.object().shape({
  name: yup.string().required(),
});

const updateShopSchema = yup.object().shape({
  name: yup.string().notRequired(),
});

module.exports = { checkAvailablitySchema, createShopSchema, updateShopSchema };
