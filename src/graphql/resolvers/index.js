const authResolvers = require("./auth");
const userResolvers = require("./user");
const itemCategoryResolvers = require("./item-category");

const rootResolvers = {
  ...authResolvers,
  ...userResolvers,
  ...itemCategoryResolvers,
};

module.exports = rootResolvers;
