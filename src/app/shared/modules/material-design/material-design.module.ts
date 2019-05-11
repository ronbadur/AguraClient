import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const MatertialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatTableModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];
  
@NgModule({
  imports: [MatertialComponents],
  exports: [MatertialComponents]
})
export class MaterialDesignModule { }
