import { Item } from '../models/Item';
import { User } from '../models/User';

export class ItemsMock {
    private user: User = {
        id: 1,
        username: "ron",
        password: "123",
        isConnected: true
    };
    data : Item[] = [{
        id: 1,
        name: "Galaxy s9",
        city: "Holon",
        owner: this.user
    },{
            id: 2,
            name: "Laptop",
            city: "Tel Aviv",
            owner: this.user
    },
        {
            id: 3,
            name: "Television",
            city: "Kfar Saba",
            owner: this.user
        }];
}