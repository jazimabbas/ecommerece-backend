const authResolvers = require("./auth");
const userResolvers = require("./user");
const itemCategoryResolvers = require("./item-category");
const shopResolvers = require("./shop");
const itemResolvers = require("./item");
const checkoutResolvers = require("./checkout");

const rootResolvers = {
  ...authResolvers,
  ...userResolvers,
  ...itemCategoryResolvers,
  ...shopResolvers,
  ...itemResolvers,
  ...checkoutResolvers,
};

module.exports = rootResolvers;
