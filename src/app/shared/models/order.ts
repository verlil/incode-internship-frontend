import { User } from './user';
import { OrderItem } from './order-item';

export class Order {
  date: number;
  client: User;
  total: number;
  items: {[id: string]: OrderItem};
}
