import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { HomeComponent } from './shared/home/home.component';
import { UsersigninComponent } from './user/usersignin/usersignin.component';
import { UsersignupComponent } from './user/usersignup/usersignup.component';



const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'admin', component: AdmindashComponent},
  { path: 'usersignin', component: UsersigninComponent},
  { path: 'usersignup', component: UsersignupComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdmindashComponent, HomeComponent]
export const userComponents = [UsersignupComponent, UsersigninComponent]

 