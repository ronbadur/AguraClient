import { Injectable } from '@angular/core';
import { ItemsMock } from '../../data/ItemsMock';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private mockData: ItemsMock) { }

  fetchItemsByUsername(username: string) {
      return this.mockData.data;
  }

  fetchAllItems() {
    return null;
  }
}
