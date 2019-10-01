import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './shared/home/home.component';
import { CourseComponent } from './shared/course/course.component';
import { UsersigninComponent } from './user/usersignin/usersignin.component';
import { UsersignupComponent } from './user/usersignup/usersignup.component';
import { UserdashComponent } from './user/userdash/userdash.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';




const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'usersignin', component: UsersigninComponent},
  { path: 'usersignup', component: UsersignupComponent},
  { path: 'userdash', component: UserdashComponent},
  { path: 'course', component: CourseComponent},
  { path: 'admin', component: AdminloginComponent},
  { path: 'admindash', component: AdmindashComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NavComponent, HomeComponent, CourseComponent]
export const userComponents = [UsersignupComponent, UsersigninComponent, UserdashComponent]
export const adminComponents = [AdminloginComponent, AdmindashComponent]

 