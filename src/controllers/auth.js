const validate = require("../utils/validations");
const validations = require("../utils/validations/auth");

async function register(req, res) {
  const cleanFields = await validate(validations.registerSchema, req.body);
  res.send("register");
}

module.exports = { register };
