const db = require("../models");
const Exceptions = require("../utils/custom-exceptions");

async function saveUser(user) {
  try {
    const newUser = new db.User({ ...user });
    return await newUser.save();
  } catch (err) {
    throw new Exceptions.BadRequestException("Email already exists");
  }
}

module.exports = { saveUser };
