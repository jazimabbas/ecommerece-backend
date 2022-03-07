const db = require("../models");
const Exceptions = require("../utils/custom-exceptions");

async function updateProfile(userId, userFields) {
  const userInDb = await db.User.findByPk(userId);
  if (!userInDb) {
    throw new Exceptions.NotFoundException("User is not found");
  }

  await db.User.update({ ...userFields }, { where: { id: userId } });
  return await db.User.findByPk(userId);
}

module.exports = { updateProfile };
