import { Component, OnInit } from '@angular/core';
import {Item} from '../shared/models/Item';
import {ItemService} from '../shared/services/item/item.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  item: Item;

  constructor(private itemsService: ItemService) { }

  ngOnInit() {

    var selectedCategory = '';

    var categoryCounterCookie = this.getCookieData('categoryCounter');

    this.item.name = 'default';

    if (categoryCounterCookie) {
      var categoryCounter = JSON.parse(categoryCounterCookie);

      selectedCategory = Object.keys(categoryCounter).reduce((a, b) => categoryCounter[a] > categoryCounter[b] ? a : b);
    }

    this.itemsService.fetchItemByCategory(selectedCategory).subscribe((data : any) => {
      const allItems = [];
        const itemToAdd: Item = {
          name: data.name,
          city: data.city,
          category: data.category.name,
          description: data.description,
          owner: data.username

        };
         
       this.item = itemToAdd;
     });
  }


  getCookieData(name) {
    var pairs = document.cookie.split("; "),
      count = pairs.length, parts;
    while (count--) {
      parts = pairs[count].split("=");
      if (parts[0] === name)
        return parts[1];
    }
    return false;
  }

}
