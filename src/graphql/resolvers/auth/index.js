const authService = require("../../../services/mogno/auth");

exports.register = async function (userPayload) {
  try {
    await authService.saveUser(userPayload);
    return { message: "Successfully registered user" };
  } catch (err) {
    throw err;
  }
};
