const authResolvers = require("./auth");
const userResolvers = require("./user");
const itemCategoryResolvers = require("./item-category");
const shopResolvers = require("./shop");
const itemResolvers = require("./item");

const rootResolvers = {
  ...authResolvers,
  ...userResolvers,
  ...itemCategoryResolvers,
  ...shopResolvers,
  ...itemResolvers,
};

module.exports = rootResolvers;
