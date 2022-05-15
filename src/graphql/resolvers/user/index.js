const { combineResolvers } = require("graphql-resolvers");
const isAuth = require("../../middlewares/is-auth");
const userService = require("../../../services/mogno/user");
const uploadToS3 = require("../../../utils/aws/graphql-upload-to-s3");

exports.updateProfile = combineResolvers(
  isAuth,
  async function (userPayload, args) {
    const { user: userData } = userPayload;
    console.log("userpayload: ", userPayload);

    if (userPayload.image) {
      const { createReadStream, filename } = await userPayload.image.file;
      const stream = createReadStream();
      const s3Object = await uploadToS3({ stream, filename });
      userData["image"] = s3Object.Location;
    }

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
