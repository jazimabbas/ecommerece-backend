const authResolvers = require("./auth");

const rootResolvers = {
  ...authResolvers,
};

module.exports = rootResolvers;
