const db = require("../models");
const Exceptions = require("../utils/custom-exceptions");

async function saveUser(user) {
  try {
    const newUser = new db.User({ ...user });
    newUser.password = await newUser.getHashedPassword();
    return await newUser.save();
  } catch (err) {
    console.log("error: ", err);
    throw new Exceptions.BadRequestException("Email already exists");
  }
}

module.exports = { saveUser };
