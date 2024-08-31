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
  type Review {
  rating: Int!
  comment: String!
  date: String!
  username: String!
}

  type Product {
  id: Int!
  thumbnail: String!
  title: String!
  price: Float!
  description: String!
  reviews: [Review!]!
}

type Query {
  products: [Product!]!
  product(id: Int!): Product
}

`;