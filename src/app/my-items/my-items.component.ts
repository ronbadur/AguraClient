import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/services/item/item.service';
import { Item } from '../shared/models/Item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.less']
})
export class MyItemsComponent implements OnInit {

  items: Item[] = [];
  displayedColumns: string[] = ['id', 'category', 'name', 'city'];

  constructor(private itemsService: ItemService, private router: Router) { }

  ngOnInit() {
    this.items = this.itemsService.fetchItemsByUsername("ronbadur");
  }

  createNewItem() {
    this.router.navigate(['/give-something']);
  }

}
