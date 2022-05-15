const { buildSchema } = require("graphql");

const graphqlSchema = buildSchema(`
    type Query {
        sample: String

        getSingleShopDetail(shopId: String): ReturnPayload

        allItems: ReturnPayload
        singleItem(id: String): ReturnPayload
    }

    type Mutation {
        register(name: String!, email: String!, password: String!): ReturnPayload
        login(email: String!, password: String!): ReturnPayload
        updateProfile(user: UpdateUserPayload, image: Upload): ReturnPayload

        createShop(name: String): ReturnPayload
        updateShop(shopId: String, name: String, image: Upload): ReturnPayload
        checkShopAvailablity(name: String): ReturnPayload
        shopExistsForUser(userId: String): ReturnPayload
        getShopDetails: ReturnPayload
        
        getShopItems(shopId: String): ReturnPayload

        createCategory(name: String, shopId: String): ReturnPayload
        updateCategory(id: String, name: String, shopId: String): ReturnPayload
        allCategories(shopId: String): ReturnPayload

        createItem(item: CreateItemPayload, featured: Upload): ReturnPayload
        updateItem(id: String, item: UpdateItemPayload): ReturnPayload
        
        
        deleteItem(id: String): ReturnPayload
        createCheckout(items: [CreateCheckoutPayload]): ReturnPayload

        allPurchases: ReturnPayload
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

    input CreateItemPayload {
        name: String
        categoryId: String
        description: String
        price: Int
        quantity: Int
        shopId: String
    }

    input UpdateItemPayload {
        price: Int
        categoryId: String
        name: String
    }

    input CreateCheckoutPayload {
        itemId: String
        quantity: Int
        isGift: Boolean
        description: String
    }
`);

module.exports = graphqlSchema;
