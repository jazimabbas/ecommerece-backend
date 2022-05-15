const { combineResolvers } = require("graphql-resolvers");
const isAuth = require("../../middlewares/is-auth");
const shopService = require("../../../services/mogno/shop");

exports.checkShopAvailablity = async function (shopPayload) {
  const shop = await shopService.isShopAvailable(shopPayload.name);
  const isAvailable = shop ? false : true;
  return { data: JSON.stringify({ isAvailable }) };
};

exports.createShop = combineResolvers(
  isAuth,
  async function (shopPayload, args) {
    const newShop = await shopService.createNewShop(shopPayload, args._auth.id);
    return { message: "create new shop", data: JSON.stringify(newShop) };
  }
);

exports.updateShop = async function (shopPayload) {
  const { shopId, name } = shopPayload;
  const updatedShop = await shopService.updateShop(shopId, { name });
  return { message: "Update shop", data: JSON.stringify(updatedShop) };
};
