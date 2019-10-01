import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';



@NgModule({
  declarations: [AdmindashComponent, AdminloginComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
