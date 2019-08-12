import { Component, OnInit } from '@angular/core';
import {Item} from '../shared/models/Item';
import {ItemService} from '../shared/services/item/item.service';

@Component({
  selector: 'app-take-something',
  templateUrl: './take-something.component.html',
  styleUrls: ['./take-something.component.less']
})
export class TakeSomethingComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemsService: ItemService) { }

  ngOnInit() {
    this.itemsService.fetchAllItems().subscribe((data) => {
      const allItems = [];
      (data as any).items.forEach((currItem, index) => {
        const item: Item = {
          id: index,
          name: currItem.name,
          city: currItem.city,
          category: currItem.category.name
        };
        allItems.push(item);
      });
      this.items = allItems;
    });
  }
}
