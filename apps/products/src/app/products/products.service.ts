import { Injectable } from '@angular/core';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products: Product[] = [
    {
      name: "Product 1",
      description: "Description for product 1",
      price: 100,
      id: 1,
    },
    {
      name: "Product 2",
      description: "Description for product 2",
      price: 200,
      id: 2,
    },
    {
      name: "Product 3",
      description: "Description for product 3",
      price: 300,
      id: 3,
    },
    {
      name: "Product 4",
      description: "Description for product 4",
      price: 400,
      id: 4,
    },
    {
      name: "Product 5",
      description: "Description for product 5",
      price: 500,
      id: 5,
    },
  ]
}
