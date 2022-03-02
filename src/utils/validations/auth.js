const yup = require("yup");

const registerSchema = yup.object().shape({
  name: yup.string().min(3).max(50).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(30).required(),
});

module.exports = { registerSchema };
