import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  // assign default page number
  page: number = 1
  // search filter
  filterString: string = ''
  constructor(public userService: UserService, private toastr: ToastrService, 
    private router: Router) {  }

  ngOnInit(): void {
    console.log("Welcome to life cycle hook")
    this.userService.bindGetAllUsersList()
    console.log(this.userService.users)
  }

  getAllUsersList(){
    console.log(this.userService.getAllUsers().subscribe(
      response =>{
        console.log("Retrieving from list")
        console.log(response)
      },
      (error) =>{
        console.log(error)
      }
    ));
  }

  // Populate user form for edit
  populateForm(user: User){
    console.log(user)
    this.userService.formUserData = Object.assign({},user)
  }

  // update a user
  updateUser(userId: number){
    console.log(userId)
    this.router.navigate(['register',userId])
  }

  // delete a user
  deleteUser(user: User){
    console.log(user);
    this.userService.deleteUser(user);
  }

}
