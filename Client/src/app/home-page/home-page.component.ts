import {Component, OnInit} from '@angular/core';
import {WebSocketService} from '../shared/services/web-socket/web-socket.service';
import {UserService} from '../shared/services/user/user.service';
import {Item} from '../shared/models/Item';
import {ItemService} from '../shared/services/item/item.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  item: Item = {} as Item;

  constructor(private socketService: WebSocketService, private userService: UserService, private itemsService: ItemService) {
  }

  ngOnInit() {
    this.socketService.sendUserID(this.userService.getUsername());
    this.socketService.newMessage().subscribe((message) => {
      alert('You have new message');
    });

    let selectedCategory = '';

    const categoryCounterCookie = this.getCookieData('categoryCounter');

    if (categoryCounterCookie) {
      const categoryCounter = JSON.parse(categoryCounterCookie);

      selectedCategory = Object.keys(categoryCounter).reduce((a, b) => categoryCounter[a] > categoryCounter[b] ? a : b);


      this.itemsService.fetchItemByCategory(selectedCategory).subscribe((data: any) => {
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
    const pairs = document.cookie.split('; ');
    let  count = pairs.length;
    let parts;
    while (count--) {
      parts = pairs[count].split('=');
      if (parts[0] === name) {
        return parts[1];
      }
    }
    return false;
  }

}
