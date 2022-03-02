const bcrypt = require("bcryptjs");
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

async function login(user) {
  const userInDb = await db.User.findOne({ where: { email: user.email } });

  if (!userInDb) {
    throw new Exceptions.BadRequestException(
      "Email not found. Please check again"
    );
  }

  if (!(await bcrypt.compare(user.password, userInDb.password))) {
    throw new Exceptions.BadRequestException("Password doesn't match");
  }

  return userInDb;
}

module.exports = { saveUser, login };
