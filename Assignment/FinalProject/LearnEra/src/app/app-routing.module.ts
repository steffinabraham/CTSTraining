import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { HomeComponent } from './shared/home/home.component';
import { CoursesComponent } from './shared/courses/courses.component';
import { UsersigninComponent } from './user/usersignin/usersignin.component';
import { UsersignupComponent } from './user/usersignup/usersignup.component';
import { UserdashComponent } from './user/userdash/userdash.component';




const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'admin', component: AdmindashComponent},
  { path: 'usersignin', component: UsersigninComponent},
  { path: 'usersignup', component: UsersignupComponent},
  { path: 'userdash', component: UserdashComponent},
  { path: 'courses', component: CoursesComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdmindashComponent, HomeComponent, CoursesComponent]
export const userComponents = [UsersignupComponent, UsersigninComponent, UserdashComponent]

 