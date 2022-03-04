const yup = require("yup");

const profileSchema = yup.object().shape({
  city: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  about: yup.string().notRequired(),
  address: yup.string().required(),
  country: yup.string().notRequired(),
});

module.exports = { profileSchema };
