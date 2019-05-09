import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

const MatertialComponents = [
  MatButtonModule,
  MatSidenavModule
];
  
@NgModule({
  imports: [MatertialComponents],
  exports: [MatertialComponents]
})
export class MaterialDesignModule { }
