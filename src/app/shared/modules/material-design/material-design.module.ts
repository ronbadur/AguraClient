import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

const MatertialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatTableModule
];
  
@NgModule({
  imports: [MatertialComponents],
  exports: [MatertialComponents]
})
export class MaterialDesignModule { }
