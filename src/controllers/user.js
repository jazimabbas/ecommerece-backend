const validate = require("../utils/validations");
const validations = require("../utils/validations/user");
const userService = require("../services/mogno/user");

async function updateProfile(req, res) {
  const cleanFields = await validate(validations.profileSchema, req.body);
  cleanFields["image"] = req.file ? req.file.filename : "";

  const userFields = {};
  for (let key in cleanFields) {
    if (cleanFields[key]) {
      userFields[key] = cleanFields[key];
    }
  }

  const user = await userService.updateProfile(req.user.id, userFields);
  res.send({ message: "Successfully update the profile", user });
}

module.exports = { updateProfile };
