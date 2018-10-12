import { ProductsEffect } from './products.effect';
import { CategoriesEffect } from './categories.effects';
import { OrdersEffect } from './orders.effects';

export const effects: any[] = [ProductsEffect, CategoriesEffect, OrdersEffect];

export * from './products.effect';
export * from './categories.effects';
export * from './orders.effects';
