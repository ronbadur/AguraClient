import { Component, OnInit } from '@angular/core';
import {Item} from '../shared/models/Item';
import {ItemService} from '../shared/services/item/item.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  item: Item = {} as Item;

  constructor(private itemsService: ItemService) { }

  ngOnInit() {

    var selectedCategory = '';

    var categoryCounterCookie = this.getCookieData('categoryCounter');

    if (categoryCounterCookie) {
      var categoryCounter = JSON.parse(categoryCounterCookie);

        selectedCategory = Object.keys(categoryCounter).reduce((a, b) => categoryCounter[a] > categoryCounter[b] ? a : b);
      

      this.itemsService.fetchItemByCategory(selectedCategory).subscribe((data : any) => {
        const allItems = [];
          const itemToAdd: Item = {
            name: data.item[0].name,
            city: data.item[0].city,
            category: data.item[0].category,
            description: data.item[0].description,
            owner: data.item[0].username

          };
          
        this.item = itemToAdd;
      });
    }
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
