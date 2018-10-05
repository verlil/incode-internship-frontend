import { RouterEffects } from './router.effect';
import { WishlistEffects } from '../../features/wishlist/@store';

export const effects: any[] = [RouterEffects, WishlistEffects];

export * from './router.effect';
