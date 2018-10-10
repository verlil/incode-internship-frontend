import { LoginEffects } from './login.effects';
import { NotificationsEffects } from './notifications.effects';

export const effects: any[] = [ LoginEffects, NotificationsEffects ];

export * from './login.effects';
export * from './notifications.effects';
