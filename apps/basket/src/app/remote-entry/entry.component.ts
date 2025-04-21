import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsService } from '@nmfe/common';
import { ProductComponent } from 'products/ProductComponent';

@Component({
  imports: [CommonModule, ProductComponent],
  selector: 'app-basket-entry',
  template: `<h2>Basket</h2>
    @for (product of productsService.products; track product.id) {
    <app-product [product]="product" />
    } `,
})
export class RemoteEntryComponent {
  public productsService = inject(ProductsService);
}
