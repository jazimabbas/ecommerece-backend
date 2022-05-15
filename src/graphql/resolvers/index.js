const authResolvers = require("./auth");
const userResolvers = require("./user");
const itemCategoryResolvers = require("./item-category");
const shopResolvers = require("./shop");

const rootResolvers = {
  ...authResolvers,
  ...userResolvers,
  ...itemCategoryResolvers,
  ...shopResolvers,
};

module.exports = rootResolvers;
