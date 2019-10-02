import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  constructor(private http: HttpClient) { }
  uerror_message='';
  users = [];
  get_user_list = function() {
    this.http.get("http://localhost:3000/user/").subscribe(
      (result : any[]) => {
        this.users = result;
        this.uerror_message = ""
      },
      (error) => {
        this.uerror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_employee = function(id) {
    this.http.delete("http://localhost:3000/user/"+id).subscribe(
      (result) => {
        //this.users = result;
        this.uerror_message = "Deleted"
        this.users = [];
        this.get_user_list()
      },
      (error) => {
        this.uerror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }




  merror_message='';
  mentors = [];
  get_mentor_list = function() {
    this.http.get("http://localhost:3000/mentor/").subscribe(
      (result : any[]) => {
        this.mentors = result;
        console.log(result)
        this.merror_message = ""
      },
      (error) => {
        this.merror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_mentor = function(id) {
    this.http.delete("http://localhost:3000/mentor/"+id).subscribe(
      (result) => {
        
        this.merror_message = "Deleted"
        this.mentors = [];
        this.get_mentor_list()
      },
      (error) => {
        this.merror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }



//-------------------------COURSE-------------------------------------



cerror_message='';
courses = [];
get_course_list = function() {
  this.http.get("http://localhost:3000/course/").subscribe(
    (result : any[]) => {
      this.courses = result;
      console.log(result)
      this.cerror_message = ""
    },
    (error) => {
      this.cerror_message = "Error occured, check whether Backend is running!";
      console.log(error)
    }
  )
}

delete_course = function(id) {
  this.http.delete("http://localhost:3000/course/"+id).subscribe(
    (result) => {
      
      this.cerror_message = "Deleted"
      this.courses = [];
      this.get_mentor_list()
    },
    (error) => {
      this.cerror_message = "Error occured, check whether Backend is running!";
      console.log(error)
    }
  )
}


//--------------------------------------------------------
  ngOnInit() {
    this.get_user_list();
    this.get_mentor_list();
    this.get_course_list();
  }

}

