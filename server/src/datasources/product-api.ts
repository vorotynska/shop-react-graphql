import { RESTDataSource } from "@apollo/datasource-rest";
import { Product, Review } from "../types";

export class ProductAPI extends RESTDataSource {
    baseURL = 'https://dummyjson.com/'

    async getProducts(): Promise<Product[]> {
        const response = await this.get('products');
      //  return await this.get<Product[]>('products')
        // Проверьте, что возвращаемое значение - массив
        // console.log(response); // добавьте это для отладки
        return response.products; // предполагая, что API возвращает объект с ключом 'products', который содержит массив продуктов
    }
    
    async getProduct(id: number): Promise<Product> {
        return await this.get<Product>(`products/${id}`);
    }

    async getProductReviews(id: number): Promise<Review[]> {
      const response: Product = await this.get(`products/${id}`);
      
      if (!response.reviews || response.reviews.length === 0) {
        return [];
      }
  
      return response.reviews.map((review: any) => ({
        rating: review.rating,
        comment: review.comment,
        date: new Date(review.date).toISOString().split('T')[0],
        username: review.reviewerName,
      }));
    }
}