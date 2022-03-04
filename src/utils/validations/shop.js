const yup = require("yup");

const checkAvailablitySchema = yup.object().shape({
  name: yup.string().required(),
});

const createShopSchema = yup.object().shape({
  name: yup.string().required(),
});

module.exports = { checkAvailablitySchema, createShopSchema };
