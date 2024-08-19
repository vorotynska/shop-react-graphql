
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";


const GET_PRODUCT = gql`
  query GetProduct($id: Int!) {
  product(id: $id){
   id
   thumbnail
   title
   price
   description
  }
}
`;

const ProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const { loading, error, data } = useQuery(GET_PRODUCT, {
      variables: { id: parseInt(id || '0', 10) },
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    const product = data.product;
  
    return (
      <div className="max-w-2xl mx-auto p-4">
        <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover mb-4" />
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-600 text-xl">${product.price}</p>
        <p className="mt-4">{product.description}</p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded">Buy</button>
      </div>
    );   
}

export default ProductPage;