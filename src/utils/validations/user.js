const yup = require("yup");

const profileSchema = yup.object().shape({
  name: yup.string().nullable().notRequired(),
  city: yup.string().nullable().notRequired(),
  phone: yup.string().nullable().notRequired(),
  about: yup.string().nullable().notRequired(),
  address: yup.string().nullable().required(),
  country: yup.string().nullable().notRequired(),
  dateOfBirth: yup.string().nullable().notRequired(),
});

module.exports = { profileSchema };
