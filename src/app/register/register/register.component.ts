import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    // get all roles for drop-down list
    this.userService.bindGetAllRoles()
  }

  // Submit
  onSubmit(form: NgForm){
    console.log(form.value)
    // Insert = 0  or Update >= 1
    let insertId = this.userService.formUserData.userId
    console.log(insertId);
    
    // checking for insert or update
    if(insertId == 0 || insertId == null){
      console.log("Inserting");
      this.insertUserRecord(form)
    }
    else{
      console.log("Updating");
      this.editUserRecord(form)
    }
  }

  // Insert method
  insertUserRecord(form?: NgForm){
    console.log("Inserting a record")
    console.log(form.value)
    this.userService.insertUser(form.value).subscribe(
      (result) =>{
        console.log(result)
        window.location.reload()
        this.toastr.success("User record has been inserted",'AMS v2022')
      }
    )
  }

  // Update method
  editUserRecord(form?: NgForm){
    console.log("Editing/updating a record")
    
    console.log(form.value)
    this.userService.editUser(form.value).subscribe(
      (result) =>{
        console.log(result)
        //window.location.reload()
        this.toastr.success("User record has been updated",'AMS v2022')
      }
    );
  }
}
