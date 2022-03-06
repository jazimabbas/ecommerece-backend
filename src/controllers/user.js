const validate = require("../utils/validations");
const validations = require("../utils/validations/user");

async function updateProfile(req, res) {
  console.log("file", req.file);

  const cleanFields = await validate(validations.profileSchema, req.body);

  const userFields = {};
  for (let key in cleanFields) {
    if (cleanFields[key]) {
      userFields[key] = cleanFields[key];
    }
  }

  res.send({ userFields });
}

module.exports = { updateProfile };
