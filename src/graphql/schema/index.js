const { buildSchema } = require("graphql");

const graphqlSchema = buildSchema(`
    type Query {
        sample: String
    }

    type Mutation {
        register(name: String!, email: String!, password: String!): ReturnPayload
        login(email: String!, password: String!): ReturnPayload
        updateProfile(user: UpdateUserPayload): ReturnPayload
        createShop(name: String): ReturnPayload
        updateShop(shopId: String, name: String): ReturnPayload
        checkShopAvailablity(name: String): ReturnPayload
        createCategory(name: String, shopId: String): ReturnPayload
    }

    scalar Upload

    type ReturnPayload {
        message: String
        data: String
    }

    input UpdateUserPayload {
        name: String
        city: String
        phone: String
        about: String
        address: String
        country: String
        dateOfBirth: String
    }
`);

module.exports = graphqlSchema;
