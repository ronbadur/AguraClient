import { Injectable } from '@angular/core';
import { ItemsMock } from '../../data/ItemsMock';
import { Item } from '../../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  idCounter = 4;

  constructor(private mockData: ItemsMock) { }

  fetchItemsByUsername(username: string) {
      return this.mockData.data;
  }

  fetchAllItems() {
    return null;
  }

  addItem(item: Item) {
    this.mockData.data.push({
      id: this.idCounter,
      name: item.name,
      category: item.category,
      city: item.city
    })
    this.idCounter++;
    
  }
}
