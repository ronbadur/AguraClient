import { User } from './User';

export interface Item {
    id: number,
    name: string,
    city: string,
    owner: User
}