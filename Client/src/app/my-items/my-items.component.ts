import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Item} from '../shared/models/Item';
import {UserService} from '../shared/services/user/user.service';
import {ItemService} from '../shared/services/item/item.service';


@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.less']
})
export class MyItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(private router: Router, private userService: UserService, private itemsService: ItemService) { }

  async ngOnInit() {
    this.fetchItemsByUsername();
  }

  createNewItem() {
    this.router.navigate(['/give-something']);
  }

  renderItems() {
    this.fetchItemsByUsername();
  }

  fetchItemsByUsername() {
    this.itemsService.fetchItemsByUsername(this.userService.username).subscribe((data) => {
      const userItems = [];
      (data as any).items.forEach((currItem) => {
        const item: Item = {
          id: currItem._id,
          name: currItem.name,
          city: currItem.city,
          category: currItem.category.name,
          description: currItem.description
        };
        userItems.push(item);
      });
      this.items = userItems;
    });
  }
}
