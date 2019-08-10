import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.less']
})
export class MyItemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createNewItem() {
    this.router.navigate(['/give-something']);
  }
}
