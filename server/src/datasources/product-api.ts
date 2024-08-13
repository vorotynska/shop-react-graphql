import { RESTDataSource } from "@apollo/datasource-rest";

export class ProductAPI extends RESTDataSource {
    baseURL = 'https://dummyjson.com/'

    async getProducts() {
        const response = await this.get('products');
        // Проверьте, что возвращаемое значение - массив
        // console.log(response); // добавьте это для отладки
        return response.products; // предполагая, что API возвращает объект с ключом 'products', который содержит массив продуктов
    }

}