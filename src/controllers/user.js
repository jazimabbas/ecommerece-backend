const validate = require("../utils/validations");
const validations = require("../utils/validations/user");

async function updateProfile(req, res) {
  console.log("file", req.file);

  const cleanFields = await validate(validations.profileSchema, req.body);
  res.send(cleanFields);
}

module.exports = { updateProfile };
