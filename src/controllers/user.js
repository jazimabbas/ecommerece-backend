const validate = require("../utils/validations");
const validations = require("../utils/validations/user");

async function updateProfile(req, res) {
  const cleanFields = await validate(validations.profileSchema, req.body);
  res.send(cleanFields);
}

module.exports = { updateProfile };
