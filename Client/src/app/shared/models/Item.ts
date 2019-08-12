import { User } from './User';

export interface Item {
    id?: number;
    name: string;
    category: string;
    city: string;
    owner?: User;
}
