import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
  serv;

  constructor(private service:EmployeeServiceService) 
  { 

  }
  func(){
    this.serv=this.service.getJson();
  }

  ngOnInit() {
  }

}
