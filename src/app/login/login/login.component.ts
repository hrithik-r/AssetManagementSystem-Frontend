import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jwtresponse } from '../../shared/jwtresponse';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean = false
  loginForm: FormGroup
  error = ''
  jwtResponse: any = new Jwtresponse()

  constructor(private formBuilder: FormBuilder,private authService: AuthService, private router: Router) { }

  // life cycle hook
  ngOnInit(): void {
    // create a reactive form - model approach
    // FormGroup -- FormControlName -- FormBuilder
    this.loginForm = this.formBuilder.group(
      {
        //FormControlName
        username: ['',[Validators.required, Validators.minLength(2)]],
        password: ['',[Validators.required]]
      }
    )
  }

  // check creds
  loginCredentials(){
    // validation
    this.isSubmitted = true
    console.log(this.loginForm.value)

    // invalid form
    if(this.loginForm.invalid)
      return;
    
    // valid form
    if(this.loginForm.valid){
      // calling method to check creds
      // this.authService.getUserNameAndPassword(this.loginForm.value).subscribe(
      this.authService.loginVerify(this.loginForm.value).subscribe(
        (result) =>{
          console.log(result)
          this.error=""

          // token with deptId and name
          this.jwtResponse = result

          // storing daat in session storage
          sessionStorage.setItem("JWT_TOKEN", this.jwtResponse.token)
          console.log(this.jwtResponse.roleId)

          const finalresult = this.jwtResponse.username.charAt(0)+this.jwtResponse.username.slice(1);
          sessionStorage.setItem("USERNAME", finalresult)
          localStorage.setItem("USERNAME", finalresult)
          console.log(finalresult)
          this.authService.loggedUser = finalresult

          // Authorization
          console.log(this.jwtResponse.deptId)
          if(this.jwtResponse.roleId===1){
            console.log("Admin")
            localStorage.setItem("ACCESS_ROLE",this.jwtResponse.roleId.toString())
            this.router.navigateByUrl('/vendor')
          }
          else if(this.jwtResponse.roleId===2){
            console.log("Purchase Manager")
            localStorage.setItem("ACCESS_ROLE",this.jwtResponse.roleId.toString())
            this.router.navigateByUrl('/purchaseentry')
          }
          else
            this.error="Sorry! Not allowed to access (Invalid Authorisation)"
          window.localStorage.setItem("loggedUser",this.authService.loggedUser)
          localStorage.setItem("isLogged",'true')
        },(error) =>{
          console.log(error)
          this.error="Invalid username and password!"
        }
      )
    }
  }

  // get all controls from loginForm
  get formControls(){
    return this.loginForm.controls
  }

}
