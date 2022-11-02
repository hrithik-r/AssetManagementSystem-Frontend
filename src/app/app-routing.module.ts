import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VendorComponent} from '../../src/app/vendor/vendor/vendor.component'
import {VendorlistComponent} from 'src/app/vendor/vendorlist/vendorlist.component'
import { LoginComponent } from 'src/app/login/login/login.component'
import { RegisterComponent } from './register/register/register.component';
import { UserListComponent } from 'src/app/login/user-list/user-list.component'


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'vendor', component:  VendorComponent},
  { path: 'vendorlist', component:  VendorlistComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userlist', component: UserListComponent},
  { path: 'register/:userId', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
