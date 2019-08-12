import {Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatTable, MatDialog, MatTableDataSource} from '@angular/material';
import {Item} from '../shared/models/Item';
import {ItemService} from '../shared/services/item/item.service';
import {Router} from '@angular/router';
import {UpdateItemDialogComponent} from '../update-item-dialog/update-item-dialog.component';
import {UserService} from '../shared/services/user/user.service';

@Component({
  selector: 'items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.less']
})
export class ItemsTableComponent implements OnInit, OnChanges {

  @ViewChild(MatTable) table: MatTable<any>;
  @Input() isEditable: boolean;
  @Input() items;
  dataSource;
  displayedColumns: string[] = ['id', 'category', 'name', 'city'];
  searchQuery: string;

  constructor(private itemsService: ItemService, private router: Router, private dialogService: MatDialog,
              private userService: UserService) {
  }

  ngOnInit() {
    if (this.isEditable) {
      this.displayedColumns.push('actions');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      this.dataSource = new MatTableDataSource(this.items);
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
