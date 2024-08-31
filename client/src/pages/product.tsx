import { GetProductQuery, GetProductQueryVariables } from '../__generated__/graphql';
import { useState } from 'react';
import { useQuery, gql} from '@apollo/client';
import { useParams } from 'react-router-dom';


const GET_PRODUCT = gql`
  query GetProduct($id: Int!) {
    product(id: $id) {
      id
      thumbnail
      title
      price
      description
      reviews {
        rating
        comment
        date
        username
      }
    }
  }
`;

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<GetProductQuery, GetProductQueryVariables>(GET_PRODUCT, {
    variables: { id: parseInt(id || '0', 10) },
  });
  const [showAllReviews, setShowAllReviews] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.product) return <p>Product not found</p>;

    const { product } = data;
 // const product = data?.product;
  const reviews = product?.reviews || [];
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover mb-4" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-600 text-xl">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded">Buy</button>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Reviews</h2>
        {displayedReviews.map((review, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <p className="font-bold">{review.username}</p>
            <p>Rating: {review.rating}/5</p>
            <p>{review.comment}</p>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        ))}
        {reviews.length > 3 && !showAllReviews && (
          <button 
            onClick={() => setShowAllReviews(true)}
            className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded"
          >
            Show All Reviews
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
/*
{
  "id": 1,
  "title": "Essence Mascara Lash Princess",
  "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  "category": "beauty",
  "price": 9.99,
  "discountPercentage": 7.17,
  "rating": 4.94,
  "stock": 5,
  "tags": [
    "beauty",
    "mascara"
  ],
  "brand": "Essence",
  "sku": "RCH45Q1A",
  "weight": 2,
  "dimensions": {
    "width": 23.17,
    "height": 14.43,
    "depth": 28.01
  },
  "warrantyInformation": "1 month warranty",
  "shippingInformation": "Ships in 1 month",
  "availabilityStatus": "Low Stock",
  "reviews": [
    {
      "rating": 2,
      "comment": "Very unhappy with my purchase!",
      "date": "2024-05-23T08:56:21.618Z",
      "reviewerName": "John Doe",
      "reviewerEmail": "john.doe@x.dummyjson.com"
    },
    {
      "rating": 2,
      "comment": "Not as described!",
      "date": "2024-05-23T08:56:21.618Z",
      "reviewerName": "Nolan Gonzalez",
      "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
    },
    {
      "rating": 5,
      "comment": "Very satisfied!",
      "date": "2024-05-23T08:56:21.618Z",
      "reviewerName": "Scarlett Wright",
      "reviewerEmail": "scarlett.wright@x.dummyjson.com"
    }
  ],
  "returnPolicy": "30 days return policy",
  "minimumOrderQuantity": 24,
  "meta": {
    "createdAt": "2024-05-23T08:56:21.618Z",
    "updatedAt": "2024-05-23T08:56:21.618Z",
    "barcode": "9164035109868",
    "qrCode": "..."
  },
  "thumbnail": "...",
  "images": ["...", "...", "..."]
}
  "@graphql-codegen/cli","@graphql-codegen/typescript","@graphql-codegen/typescript-resolvers"
  "@graphql-codegen/cli","@graphql-codegen/client-preset"
  */