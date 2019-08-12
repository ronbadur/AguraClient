import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ItemService } from '../shared/services/item/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-give-something',
  templateUrl: './give-something.component.html',
  styleUrls: ['./give-something.component.less']
})
export class GiveSomethingComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
