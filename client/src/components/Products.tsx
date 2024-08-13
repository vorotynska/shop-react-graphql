import { gql } from "../__generated__/";
import { useQuery } from "@apollo/client";

const PRODUCTS = gql(`
query GetProducts {
    products {
      id
      thumbnail
      title
      price
      description
    }
  }
`)

const Products = () => {
    const { loading, error, data } = useQuery(PRODUCTS);

    if (loading) return "Loading...";

    if (error) return `Error! ${error.message}`;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.products.map((product) => (
                    <div key={product.id} className="border p-4 rounded">
                        <img src={product.thumbnail || ""} alt={product.title || ""} className="mb-4" />
                        <h2 className="text-xl font-bold">{product.title || ""}</h2>
                        <p>{product.description || ""}</p>
                        <p className="font-bold mt-2">${product.price || 0}</p>

                    </div>
                ))}


            </div>
        </div>
    )
}

export default Products;