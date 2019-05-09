import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const MatertialComponents = [
  MatButtonModule
];
  
@NgModule({
  imports: [MatertialComponents],
  exports: [MatertialComponents]
})
export class MaterialDesignModule { }
