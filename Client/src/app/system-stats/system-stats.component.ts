import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/services/item/item.service';

@Component({
  selector: 'app-system-stats',
  templateUrl: './system-stats.component.html',
  styleUrls: ['./system-stats.component.less']
})
export class SystemStatsComponent implements OnInit {

  constructor( private itemService: ItemService) { }
  private trigger = '';

  kindColors: Array<string> = [
    '#3498db',
    '#f1c40f',
  ];
  private amountOfItemsInEachKind = [];
    

  ngOnInit() {
    // amount of each kind
    this.itemService.getItemsKindStatistics().subscribe((data)=>{
      const tempArray:any[]= [];
      for (const currKind of (data as any).items) {
        tempArray.push({name : currKind._id, amount: currKind.count})
      }
      this.amountOfItemsInEachKind = tempArray;
      this.trigger = 'triger';
    });
  }

}
