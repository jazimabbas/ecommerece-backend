const { buildSchema } = require("graphql");

const graphqlSchema = buildSchema(`
    type Query {
        sample: String
    }

    type Mutation {
        register(name: String!, email: String!, password: String!): ReturnPayload
        login(email: String!, password: String!): ReturnPayload
    }

    type ReturnPayload {
        message: String
        data: String
    }
`);

module.exports = graphqlSchema;
