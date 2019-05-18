import { Injectable } from '@angular/core';
import { ItemsMock } from '../../data/ItemsMock';
import { Item } from '../../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  idCounter = 4;
  public itemToUpdate: Item;

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

  updateItem(item: Item) {
    let itemIndex = this.mockData.data.findIndex(currItem => currItem.id === this.itemToUpdate.id);
    this.mockData.data[itemIndex] = item
  }
}
