const { combineResolvers } = require("graphql-resolvers");
const isAuth = require("../../middlewares/is-auth");
const userService = require("../../../services/mogno/user");

exports.updateProfile = combineResolvers(
  isAuth,
  async function (userPayload, args) {
    const { user: userData } = userPayload;
    const userFields = {};
    for (let key in userData) {
      if (userData[key]) {
        userFields[key] = userData[key];
      }
    }
    const user = await userService.updateProfile(args._auth.id, userFields);
    const userResponse = { user, id: user._id };
    return { message: "Update profile", data: JSON.stringify(userResponse) };
  }
);
