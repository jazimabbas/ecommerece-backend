const validate = require("../utils/validations");
const validations = require("../utils/validations/auth");
const authService = require("../services/auth");

async function register(req, res) {
  const cleanFields = await validate(validations.registerSchema, req.body);
  await authService.saveUser(cleanFields);
  res.send({ message: "Successfully user is registered" });
}

async function login(req, res) {
  const cleanFields = await validate(validations.loginSchema, req.body);
  const user = await authService.login(cleanFields);

  const { dataValues } = user;
  const { password, ...userFields } = dataValues;
  const token = user.getJwtToken();
  res.send({ user: { ...userFields, token } });
}

module.exports = { register, login };
