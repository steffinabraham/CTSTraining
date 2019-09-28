import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminDashComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([{path:'admin-dash',component:AdminDashComponent}])
  ],
  exports:[AdminDashComponent]
})
export class AdminModule { }
