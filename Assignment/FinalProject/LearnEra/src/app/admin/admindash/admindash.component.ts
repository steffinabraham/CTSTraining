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

  delete_user = function(id) {
    this.http.delete("http://localhost:3000/user/"+id).subscribe(
      (result) => {
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

  block_user = function(id) {
    console.log(id)
    this.http.put("http://localhost:3000/user/block/"+id).subscribe(
      (result : any[]) => {
        this.users = result;
        console.log(this.users)
        this.uerror_message = ""
        alert("User Blocked");
        
      },
      (error) => {
        this.uerror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  unblock_user = function(id) {
    console.log(id)
    this.http.put("http://localhost:3000/user/unblock/"+id).subscribe(
      (result : any[]) => {
        this.users = result;
        console.log(this.users)
        this.uerror_message = ""
        alert("User Unblocked");
        
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

  block_mentor = function(id) {
    console.log(id)
    this.http.put("http://localhost:3000/mentor/block/"+id).subscribe(
      (result : any[]) => {
        this.mentots = result;
        console.log(this.mentors)
        this.merror_message = ""
        alert("Mentor Blocked");
        
      },
      (error) => {
        this.merror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  unblock_mentor = function(id) {
    console.log(id)
    this.http.put("http://localhost:3000/mentor/unblock/"+id).subscribe(
      (result : any[]) => {
        this.mentors = result;
        console.log(this.mentors)
        this.merror_message = ""
        alert("Mentor Unblocked");
        
      },
      (error) => {
        this.merror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }
















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
        this.get_course_list()
      },
      (error) => {
        this.cerror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  meserror_message='';
  messages = [];
  get_message_list = function() {
    this.http.get("http://localhost:3000/message/").subscribe(
      (result : any[]) => {
        this.messages = result;
        console.log(result)
        this.meserror_message = ""
      },
      (error) => {
        this.meserror_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  usrFunction = function() {
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    u.style.display = "block";
    m.style.display = "none";
    c.style.display = "none";
    mes.style.display = "none";
  }
  mntrFunction = function() {
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    u.style.display = "none";
    m.style.display = "block";
    c.style.display = "none";
    mes.style.display = "none";
  }
  crsFunction = function() {
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    u.style.display = "none";
    m.style.display = "none";
    c.style.display = "block";
    mes.style.display = "none";
  }
  msgFunction = function() {
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    u.style.display = "none";
    m.style.display = "none";
    c.style.display = "none";
    mes.style.display = "block";
  }






  ngOnInit() {
    this.get_user_list();
    this.get_mentor_list();
    this.get_course_list();
    this.get_message_list();
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    u.style.display = "block";
    m.style.display = "none";
    c.style.display = "none";
    mes.style.display = "none";
  } 

}