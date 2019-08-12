import {Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {MatTable, MatDialog, MatTableDataSource} from '@angular/material';
import {Item} from '../shared/models/Item';
import {ItemService} from '../shared/services/item/item.service';
import {Router} from '@angular/router';
import {UpdateItemDialogComponent} from '../update-item-dialog/update-item-dialog.component';
import {UserService} from '../shared/services/user/user.service';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.less']
})
export class ItemsTableComponent implements OnInit, OnChanges {
  @Input() isEditable: boolean;
  @Input() items;
  @Output() itemsChanged = new EventEmitter();

  dataSource;
  displayedColumns: string[] = ['name', 'category', 'city'];
  searchQuery: string;

  constructor(private itemsService: ItemService, private router: Router, private dialogService: MatDialog) {
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

}
