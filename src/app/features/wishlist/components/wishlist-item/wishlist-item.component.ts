import { Component, Input } from '@angular/core';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent {
  @Input() product: Product;
}
