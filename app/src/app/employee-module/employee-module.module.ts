import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EmployeeComponentComponent],
  imports: [
    CommonModule,
      RouterModule.forChild([{path: '/employee',component:EmployeeComponentComponent}]),
  ]})
export class EmployeeModuleModule { }
