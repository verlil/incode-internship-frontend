import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<{ product: Product; quantity: number }> = new EventEmitter<{ product: Product; quantity: number }>();

  quantity: FormControl = new FormControl(1, Validators.min(1));

  onAddToCart(): void {
    this.addToCart.emit({ product: this.product, quantity: this.quantity.value});
  }
}
