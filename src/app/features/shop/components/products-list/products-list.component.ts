import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs';
import {Product} from '../../../../shared/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  @Input() products$: Observable<Product[]>;

}
