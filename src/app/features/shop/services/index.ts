import { ProductsService } from './products.service';
import { CategoriesService } from './categories.service';

export const services: any[] = [ProductsService, CategoriesService];

export * from './products.service';
export * from './categories.service';
