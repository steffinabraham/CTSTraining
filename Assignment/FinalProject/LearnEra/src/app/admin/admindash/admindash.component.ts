import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AdminService } from '../admin.service';
import { Admin } from '../admin.model';

declare var M:any;

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css'],
  providers: [AdminService]
})
export class AdmindashComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshAdminList();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.adminService.selectedAdmin = {
      _id: "",
      name: "",
      skill: "",
      experience: null,
      salary: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.adminService.postAdmin(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshAdminList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.adminService.putAdmin(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshAdminList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshAdminList() {
    this.adminService.getAdminList().subscribe((res) => {
      this.adminService.admin = res as Admin[];
    });
  }

  onEdit(adminObj: Admin) {
    this.adminService.selectedAdmin = adminObj;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.adminService.deleteAdmin(_id).subscribe((res) => {
        this.refreshAdminList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }




}
