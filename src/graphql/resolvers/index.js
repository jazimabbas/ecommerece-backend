const authResolvers = require("./auth");
const userResolvers = require("./user");

const rootResolvers = {
  ...authResolvers,
  ...userResolvers,
};

module.exports = rootResolvers;
