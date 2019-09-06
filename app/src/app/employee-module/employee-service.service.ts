import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }
  getJson()
  {
    this.http.get("http://localhost:3000/things").toPromise()
    .then((data:any)=>{
      console.log(data)
    });

  }
}
 