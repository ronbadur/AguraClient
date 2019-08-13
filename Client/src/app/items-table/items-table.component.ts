import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MatTable, MatDialog, MatTableDataSource } from '@angular/material';
import { Item } from '../shared/models/Item';
import { ItemService } from '../shared/services/item/item.service';
import { Router } from '@angular/router';
import { UpdateItemDialogComponent } from '../update-item-dialog/update-item-dialog.component';
import { UserService } from '../shared/services/user/user.service';
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.less'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ItemsTableComponent implements OnInit, OnChanges {
  @Input() isEditable: boolean;
  @Input() items;
  @Output() itemsChanged = new EventEmitter();

  dataSource;
  expandedElement = null;
  columnsToDisplay: string[] = ['name', 'category', 'city'];
  searchQuery: string;

  constructor(private itemsService: ItemService, private router: Router, private dialogService: MatDialog) {
  }

  ngOnInit() {
    if (this.isEditable) {
      this.columnsToDisplay.push('actions');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      this.dataSource = new MatTableDataSource(this.items);
    }
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item.id).subscribe((data) => {
      const isSuccess = (data as any).success;
      if (isSuccess) {
        this.items = this.items.filter((currItem) => !(currItem.id === item.id));
        this.dataSource.data = this.items;
      }
    });
  }

  editItem(element) {
    const dialogRef = this.dialogService.open(UpdateItemDialogComponent, {
      width: '600px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'update') {
        this.itemsChanged.emit();
      }
    });
  }

  onSearchClear() {
    this.searchQuery = '';
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchQuery.trim().toLowerCase();
  }

  tweet() {
    console.log('zibi');
  }

  countCategory(element) {
    console.log(element);

    var categoryCounterCookie = this.getCookieData('categoryCounter');
    
    var categoryCounter = {};

    if (categoryCounterCookie) {
      categoryCounter = JSON.parse(categoryCounterCookie);
    }

    if (categoryCounter.hasOwnProperty(element.category)) {
      categoryCounter[element.category] += 1;
    }
    else {
      categoryCounter[element.category] = 1;
    }

    this.setCookie('categoryCounter', JSON.stringify(categoryCounter), 14);
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

  setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

}
