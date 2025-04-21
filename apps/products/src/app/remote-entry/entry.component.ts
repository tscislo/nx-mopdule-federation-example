import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductsService } from '../products/products.service';

@Component({
  imports: [CommonModule, ProductComponent],
  selector: 'app-products-entry',
  template: `<h2>Products</h2>
  @for (product of productsService.products; track product.id) {
    <app-product [product]="product" />
  }
  `,
})
export class RemoteEntryComponent {
  public productsService = inject(ProductsService)

}
