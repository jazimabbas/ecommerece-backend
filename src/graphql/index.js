const { graphqlHTTP } = require("express-graphql");
const rootResolvers = require("./resolvers");
const graphqlSchema = require("./schema");

module.exports = graphqlHTTP({
  schema: graphqlSchema,
  rootValue: rootResolvers,
  graphiql: true,
});
