import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsItemComponent } from './products-list/products-item/products-item.component';
import { FiltersComponent } from './filters/filters.component';
import { CartItemComponent } from './cart-item/cart-item.component';

export const components: any[] = [
  ProductsListComponent,
  ProductsItemComponent,
  FiltersComponent,
  CartItemComponent
];

export * from './products-list/products-list.component';
export * from './products-list/products-item/products-item.component';
export * from './filters/filters.component';
export * from './cart-item/cart-item.component';
