import { Component, OnInit} from '@angular/core';
import {CategoryService} from "../shared/services/category/category.service";
import {ItemService} from "../shared/services/item/item.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less']
})

export class StatisticsComponent implements OnInit {
  private amountOfItemsInEachCategory = [];
  
  private trigger = '';
  categoriesColors: Array<string> = [
    '#2ecc71',
    '#e74c3c',
    '#3498db',
    '#f1c40f',
  ];



    constructor(private categoryService: CategoryService, private itemService: ItemService){

    }

    ngOnInit(){

      // amount of each category
      this.categoryService.fetchAllCategories().subscribe((data) => {
        (data as any).categories.forEach((currCategory) => {
          this.amountOfItemsInEachCategory.push(currCategory);
        });
        this.countAmountsOfEachCategory();
      });



    }

    private countAmountsOfEachCategory() {
      this.itemService.getItemsCategoryStatistics().subscribe((data) => {
        for (const currCategory of this.amountOfItemsInEachCategory) {
          for (const categoryStat of (data as any).categories) {
            if (categoryStat._id === currCategory._id) {
              currCategory.amount = categoryStat.count;
            }
          }
        }
        this.trigger = 'triger';
      });



    }
}




