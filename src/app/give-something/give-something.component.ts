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

  itemForm = new FormGroup({
    category: new FormControl(''),
    name: new FormControl(''),
    city: new FormControl(''),
  });

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.itemService.addItem(this.itemForm.value);
    this.router.navigate(['/my-items']);
  }

}
