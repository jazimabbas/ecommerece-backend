const db = require("../../db");
const Exceptions = require("../../utils/custom-exceptions");

async function updateProfile(userId, userFields) {
  const userInDb = await db.User.findById(userId);
  if (!userInDb) {
    throw new Exceptions.NotFoundException("User is not found");
  }

  await db.User.findByIdAndUpdate(userId, { ...userFields });
  return await db.User.findById(userId);
}

module.exports = { updateProfile };
