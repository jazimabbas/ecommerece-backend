const { combineResolvers } = require("graphql-resolvers");
const isAuth = require("../../middlewares/is-auth");
const shopService = require("../../../services/mogno/shop");

exports.checkShopAvailablity = async function (shopPayload) {
  const shop = await shopService.isShopAvailable(shopPayload.name);
  const isAvailable = shop ? false : true;
  return { data: JSON.stringify({ isAvailable }) };
};

exports.shopExistsForUser = async function (shopPayload) {
  const shop = await shopService.isShopExistsForUser(shopPayload.userId);
  const isShopExists = shop ? true : false;
  return { data: JSON.stringify({ isShopExists }) };
};

exports.getShopDetails = combineResolvers(isAuth, async function (_, args) {
  const shop = await shopService.getShopDetails(args._auth.id);
  return { data: JSON.stringify(shop) };
});

exports.getSingleShopDetail = async function (shopPayload) {
  const shop = await shopService.singleShopDetail(shopPayload.shopId);
  return { data: JSON.stringify(shop) };
};

exports.getShopItems = async function (shopPayload) {
  const items = await shopService.getShopItems(shopPayload.shopId);
  return { data: JSON.stringify(items) };
};

exports.createShop = combineResolvers(
  isAuth,
  async function (shopPayload, args) {
    const newShop = await shopService.createNewShop({
      ...shopPayload,
      userId: args._auth.id,
    });
    return { message: "create new shop", data: JSON.stringify(newShop) };
  }
);

exports.updateShop = async function (shopPayload) {
  const { shopId, name } = shopPayload;
  const updatedShop = await shopService.updateShop(shopId, { name });
  return { message: "Update shop", data: JSON.stringify(updatedShop) };
};
