const { buildSchema } = require("graphql");
const schema = buildSchema(
    `type Product {
        id: ID,
        name: String,
        description: String,
        price: Float,
        soldout: Soldout,
        stores: [Store]
        inventory: Int
    },
    enum Soldout {
        SOLDOUT,
        ONSALE
    }
    type Store {
        store : String
    }
    type Query {
        getProduct(id:ID): Product
        getAllProduct:[Product]
    }
    input StoreInput {
            store: String
        }
    
    input ProductInput {
    id:ID,
    name: String,
    description: String,
    soldout : Soldout,
    price: Float,
    inventory: Int
    stores: [StoreInput]!
}

type Mutation {
    createProduct(input: ProductInput): Product
    updateProduct(input: ProductInput): Product
    deleteProduct(id: ID!): String
}
    `
);

module.exports =  schema
