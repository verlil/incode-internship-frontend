import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../../shared/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
  @Input() product: Product;
  @Input() viewMode$: Observable<string>;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
  public viewMode: string;

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  ngOnInit(): void {
    this.viewMode$.subscribe((view: string) => {
      this.viewMode = view;
    });
  }

}
