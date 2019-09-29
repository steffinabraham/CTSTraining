import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Admin } from './admin.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
    selectedAdmin: Admin;
    admin: Admin[];
    readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  postAdmin(adminObj: Admin) {
    return this.http.post(this.baseURL, adminObj);
  } 

  getAdminList() {
    return this.http.get(this.baseURL);
  }

  putAdmin(adminObj: Admin) {
    return this.http.put(this.baseURL + `/${adminObj._id}`, adminObj);
  }

  deleteAdmin(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
