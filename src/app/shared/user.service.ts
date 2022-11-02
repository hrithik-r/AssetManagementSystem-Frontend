import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from './role';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // global variable
  formUserData: User = new User()

  //1 list of users
  users: User[];

  //list of roles
  roles: Role[];

  constructor(private httpClient: HttpClient) {  }
  
  //1 get all users
  getAllUsers(): Observable<any>{
    return this.httpClient.get(environment.apiHrithik + 'users/')
  }

  //2 to retrieve all the users for listing
  bindGetAllUsersList(){
    this.httpClient.get(environment.apiHrithik + 'users/').toPromise()
    .then(
        (response) =>{
        console.log(response)
        this.users = response as User[]
      },
    )
  }

  //3 get all roles for binding
  bindGetAllRoles(){
    this.httpClient.get(environment.apiHrithik + 'roles/').toPromise().then(
      (response) =>{
        console.log(response)
        this.roles = response as Role[]
      }
    )
  }

  //4 create user
  insertUser(user: User): Observable<any>{
    console.log("Post")
    return this.httpClient.post(environment.apiHrithik + 'user-register', user)
  }

  //4 update user
  editUser(user: User): Observable<any>{    
    console.log(user.userId);
    console.log("Put")
    return this.httpClient.put(environment.apiHrithik + 'users/update', user)
  }

  //5 delete user
  deleteUser(user: User){
    console.log(user.userId);
    var userWish = window.confirm("Do you want to permanently delete the user?")
    if(userWish == true){
      return this.httpClient.delete(environment.apiHrithik + 'users/delete/' + user.userId)
    }
    else{
      user.isActive = false
      return this.httpClient.put(environment.apiHrithik + 'users/update', user)
    }
  }
}
