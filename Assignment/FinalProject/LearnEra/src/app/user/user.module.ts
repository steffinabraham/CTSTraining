import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';



@NgModule({
  declarations: [ UsersigninComponent, UsersignupComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
