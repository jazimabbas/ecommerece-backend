const { combineResolvers } = require("graphql-resolvers");
const isAuth = require("../../middlewares/is-auth");
const shopService = require("../../../services/mogno/shop");

exports.createShop = combineResolvers(
  isAuth,
  async function (shopPayload, args) {
    const newShop = await shopService.createNewShop(shopPayload, args._auth.id);
    return { message: "create new shop", data: JSON.stringify(newShop) };
  }
);
