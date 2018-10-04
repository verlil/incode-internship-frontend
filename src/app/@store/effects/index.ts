import { RouterEffects } from './router.effect';
import { LoginEffects } from '../../core/@store/effects/login.effects';

export const effects: any[] = [RouterEffects, LoginEffects];

export * from './router.effect';
