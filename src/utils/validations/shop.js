const yup = require("yup");

const checkAvailablitySchema = yup.object().shape({
  name: yup.string().required(),
});

module.exports = { checkAvailablitySchema };
