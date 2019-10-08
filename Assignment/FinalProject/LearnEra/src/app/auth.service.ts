import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
  private _router: Router) { }


logoutUser() {
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  this._router.navigate(['/'])
}
getToken() {
  return localStorage.getItem('token')
}

loggedIn() {
  return !!localStorage.getItem('token') 
  //console.log(!!localStorage.getItem('token'))
}
adminCheck() {
  return !!localStorage.getItem('email')
}

}