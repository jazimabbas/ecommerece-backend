const authService = require("../../../services/mogno/auth");

exports.register = async function (userPayload) {
  try {
    await authService.saveUser(userPayload);
    return { message: "Successfully registered user" };
  } catch (err) {
    throw err;
  }
};

exports.login = async function (userPayload) {
  const user = await authService.login(userPayload);
  const userFields = user.excludePasswordField();
  const token = user.generateToken();
  const userResponse = { ...userFields, token, id: userFields._id };
  return { data: JSON.stringify(userResponse) };
};
