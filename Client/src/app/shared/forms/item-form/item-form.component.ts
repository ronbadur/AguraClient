import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ItemService } from '../../services/item/item.service';
import { Router } from '@angular/router';
import { Item } from '../../models/Item';
import {CategoryService} from "../../services/category/category.service";

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.less']
})
export class ItemFormComponent implements OnInit {

  @Input() isUpdate: boolean;
  @Input() itemDetails: Item;
  categories: string[] = [];

  itemForm = new FormGroup({
    category: new FormControl(''),
    name: new FormControl(''),
    city: new FormControl(''),
  });

  constructor(private itemService: ItemService, private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.fetchAllCategories().subscribe((data) => {
      (data as any).categories.forEach((currCategory) => {
        this.categories.push(currCategory.name);
      });
      console.log(this.categories);
    });

    if (this.itemDetails) {
      this.itemForm.controls["category"].setValue(this.itemDetails.category);
      this.itemForm.controls["name"].setValue(this.itemDetails.name);
      this.itemForm.controls["city"].setValue(this.itemDetails.city);
    }
  }

  onSubmit() {
    this.itemService.addItem(this.itemForm.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/my-items']);
    });
  }

  updateItem() {
    let itemToUpdate = this.itemForm.value;
    itemToUpdate["id"] = this.itemDetails.id;
    this.itemService.updateItem(itemToUpdate);
  }

}
