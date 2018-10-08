import { ProductService } from './product.service';
import { CategoryService } from './category.service';

export const services: any[] = [ProductService, CategoryService];

export * from './product.service';
export * from './category.service';
