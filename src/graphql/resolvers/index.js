const authResolvers = require("./auth");
const userResolvers = require("./user");
const itemCategoryResolvers = require("./item-category");
const shopResolvers = require("./shop");
const itemResolvers = require("./item");
const checkoutResolvers = require("./checkout");
const purchaseResolvers = require("./purchase");

const rootResolvers = {
  ...authResolvers,
  ...userResolvers,
  ...itemCategoryResolvers,
  ...shopResolvers,
  ...itemResolvers,
  ...checkoutResolvers,
  ...purchaseResolvers,
};

module.exports = rootResolvers;
