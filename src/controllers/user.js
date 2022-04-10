const fs = require("fs/promises");
const validate = require("../utils/validations");
const validations = require("../utils/validations/user");
const userService = require("../services/mogno/user");
const uploadToS3 = require("../utils/aws/upload-to-s3");

async function updateProfile(req, res) {
  const cleanFields = await validate(validations.profileSchema, req.body);
  if (req.file) {
    console.log("req.file: ", req.file);
    const s3Object = await uploadToS3(req.file);
    await fs.unlink(req.file.path);
    cleanFields["image"] = s3Object.Location;
  }

  const userFields = {};
  for (let key in cleanFields) {
    if (cleanFields[key]) {
      userFields[key] = cleanFields[key];
    }
  }

  const user = await userService.updateProfile(req.user.id, userFields);
  res.send({ message: "Successfully update the profile", user, id: user._id });
}

module.exports = { updateProfile };
