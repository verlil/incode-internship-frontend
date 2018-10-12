import { ProductsService } from './products.service';
import { CategoriesService } from './categories.service';
import { OrdersService } from './orders.service';

export const services: any[] = [ProductsService, CategoriesService, OrdersService];

export * from './products.service';
export * from './categories.service';
export * from './orders.service';
