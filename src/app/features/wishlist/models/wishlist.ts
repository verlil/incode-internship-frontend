import { User } from '../../../shared/models/user';
import { Product } from '../../../shared/models/product';

export class WishList {
    id?: string;
    client: User;
    items: Product[];
}
