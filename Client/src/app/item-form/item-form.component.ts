import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ItemService } from '../shared/services/item/item.service';
import { Router } from '@angular/router';
import { Item } from '../shared/models/Item';

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.less']
})
export class ItemFormComponent implements OnInit {

  @Input() isUpdate: boolean;
  @Input() itemDetails: Item;

  itemForm = new FormGroup({
    category: new FormControl(''),
    name: new FormControl(''),
    city: new FormControl(''),
  });

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    if (this.itemDetails) {
      this.itemForm.controls["category"].setValue(this.itemDetails.category);
      this.itemForm.controls["name"].setValue(this.itemDetails.name);
      this.itemForm.controls["city"].setValue(this.itemDetails.city);
    }
  }

  onSubmit() {
    this.itemService.addItem(this.itemForm.value);
    this.router.navigate(['/my-items']);
  }

  updateItem() {
    let itemToUpdate = this.itemForm.value;
    itemToUpdate["id"] = this.itemDetails.id;
    this.itemService.updateItem(itemToUpdate);
  }

}
