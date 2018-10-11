import { ShopComponent } from '../shop.component';
import { CartComponent } from './cart/cart.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const containers: any[] = [ShopComponent, CartComponent, ProductPageComponent];

export * from '../shop.component';
export * from '../containers/cart/cart.component';
export * from './product-page/product-page.component';
