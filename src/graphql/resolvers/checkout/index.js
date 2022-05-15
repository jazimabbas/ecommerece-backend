const { combineResolvers } = require("graphql-resolvers");
const isAuth = require("../../middlewares/is-auth");
const checkoutService = require("../../../services/mogno/checkout");

exports.createCheckout = combineResolvers(
  isAuth,
  async function (checkoutPayload, args) {
    await checkoutService.checkout(args._auth.id, checkoutPayload.items);
    return { message: "Successfully checkout" };
  }
);
