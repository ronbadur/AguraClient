import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Item } from '../../models/Item';
import {environment} from '../../../../environments/environment';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient, private userService: UserService) { }

  fetchItemsByUsername(username: string) {
      return this.http.get(environment.serverUrl + `/api/items/byUser/${username}`);
  }

  fetchAllItems() {
    return this.http.get(environment.serverUrl + `/api/items/`);
  }

  fetchItemByCategory(category: string) {
    return this.http.get(environment.serverUrl + `/api/items/byCateogry/${category}`);
  }

  addItem(item: Item) {
    return this.http.post(environment.serverUrl + '/api/items', {
      name: item.name,
      category: item.category,
      city: item.city,
      username: this.userService.username,
      kind: 'ForDelivery',
      description: 'No description'
    });
  }

  updateItem(item: Item) {
    return this.http.put(environment.serverUrl + `/api/items/${item.id}`, item);
  }

  deleteItem(id) {
    return this.http.delete(environment.serverUrl + `/api/items/${id}`);
  }

  getItemsCategoryStatistics() {
    return this.http.get(environment.serverUrl + `/api/items/getItemsAmountInEachCategory`);
  }
}
