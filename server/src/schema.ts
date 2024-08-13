//import gql from "graphql-tag";
/*
export const typeDefs = gql`
 # Schema definitions go here
   type Query {
    "Get products array for homepage grid"
    products: [Product!]!
   }

   type Product {
    id: ID!
    "The product name"
    title: String!
    "The description product"
    description: String
    "The price product"
    price: Int
    "The product's main illustration to display in product card or product page detail"
    thumbnail: String
   }
`; */
import gql from "graphql-tag";
export const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    description: String
    price: Float!
    thumbnail: String
  }

  type Query {
    products: [Product]
   
  }
`;