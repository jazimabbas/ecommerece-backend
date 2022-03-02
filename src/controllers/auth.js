const validate = require("../utils/validations");
const validations = require("../utils/validations/auth");
const authService = require("../services/auth");

async function register(req, res) {
  const cleanFields = await validate(validations.registerSchema, req.body);
  await authService.saveUser(cleanFields);
  res.send({ message: "Successfully user is registered" });
}

async function login(req, res) {
  console.log("email: ", req.body.email);
  const cleanFields = await validate(validations.loginSchema, req.body);
  const user = await authService.login(cleanFields);
  res.send({ user });
}

module.exports = { register, login };
