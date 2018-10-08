import { ProductsService } from './products.service';
import { CategoriesService } from './categories.service';
import { FiltersService } from './filters.service';

export const services: any[] = [ProductsService, CategoriesService, FiltersService];

export * from './products.service';
export * from './categories.service';
export * from './filters.service';
