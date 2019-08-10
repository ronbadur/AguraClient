import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatTable, MatDialog, MatTableDataSource} from '@angular/material';
import { Item } from '../shared/models/Item';
import { ItemService } from '../shared/services/item/item.service';
import { Router } from '@angular/router';
import { UpdateItemDialogComponent } from '../update-item-dialog/update-item-dialog.component';

@Component({
  selector: 'items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.less']
})
export class ItemsTableComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  @Input() isEditable: boolean;
  items: Item[] = [];
  dataSource;
  displayedColumns: string[] = ['id', 'category', 'name', 'city'];
  searchQuery: string;

  constructor(private itemsService: ItemService, private router: Router, private dialogService: MatDialog) { }

  ngOnInit() {
    this.items = this.itemsService.fetchItemsByUsername('ronbadur');
    this.dataSource = new MatTableDataSource(this.items);
    if (this.isEditable) {
      this.displayedColumns.push('actions');
    }
  }

  deleteItem(element) {
    this.items = this.items.filter((currItem) => !(currItem.id === element.id));
    this.dataSource.data = this.items;
  }

  editItem(element) {
    this.itemsService.itemToUpdate = element;
    const dialogRef = this.dialogService.open(UpdateItemDialogComponent, {
      width: '600px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'update') {
        this.table.renderRows();
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

}
