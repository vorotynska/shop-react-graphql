import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    // get all productss, will be used to populate the homepage grid of our web client
    products: (_, __, { dataSources }) => {
      return dataSources.productAPI.getProducts();
    },
   
    // get a single product by ID, for the product page
    product: (_, { id }, { dataSources }) => {
      return dataSources.productAPI.getProduct(id);
    }
  },

  Product: {
    reviews: (parent, _, { dataSources }) => {
      return dataSources.productAPI.getProductReviews(parent.id);
    },
  },
};

/*
 export const resolvers = {
  Query: {
    products: async (_, __, { dataSources }) => {
      try {
        const products = await dataSources.productAPI.getProducts();
        // Если `products` не массив, выбросим ошибку
        if (!Array.isArray(products)) {
          throw new Error("Data returned from the API is not an array");
        }
        return products;
      } catch (error) {
        console.error("Failed to fetch products:", error);
        throw new Error("Failed to fetch products");
      }
    },
  },
};

*/