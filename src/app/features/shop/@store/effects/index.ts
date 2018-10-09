import { ProductsEffect } from './products.effect';
import { CategoriesEffect } from './categories.effects';

export const effects: any[] = [ProductsEffect, CategoriesEffect];

export * from './products.effect';
export * from './categories.effects';
