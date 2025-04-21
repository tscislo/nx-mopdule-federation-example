import { Injectable } from '@angular/core';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public get products() {
    {
      const products: Product[] = [];
      for (let i = 0; i < 10; i++) {
        products.push({
          id: i + 1,
          name: `Product ${i + 1}`,
          description: `Description for product ${i + 1}`,
          price: Math.floor(Math.random() * 1000) + 1, // Random price between 1 and 1000
        });
      }
      return products;
    }
  }
}
