import { Product } from './product';

export class CartItem {
  product: Product;
  quantity: number;
  sum: number;

  constructor(product: Product = new Product(), quantity: number = 1, sum: number = product.price) {
    this.product = product;
    this.quantity = quantity;
    this.sum = sum;
  }
}
