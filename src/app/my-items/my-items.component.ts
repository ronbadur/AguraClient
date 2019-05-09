import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.less']
})
export class MyItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createNewItem() {
    console.log("create new item button just clicked");
  }

}
