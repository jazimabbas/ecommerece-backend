const { combineResolvers } = require("graphql-resolvers");
const isAuth = require("../../middlewares/is-auth");
const purchaseService = require("../../../services/mogno/purchase");

exports.allPurchases = combineResolvers(isAuth, async function (_, args) {
  const purchases = await purchaseService.getAllPurchases(args._auth.id);
  return { data: JSON.stringify(purchases) };
});
