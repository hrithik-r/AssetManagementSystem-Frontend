import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VendorComponent} from '../../src/app/vendor/vendor/vendor.component'
import {VendorlistComponent} from 'src/app/vendor/vendorlist/vendorlist.component'
import { PurchaseentryComponent } from './purchase/purchaseentry/purchaseentry.component'
import { PurchaselistingComponent } from './purchase/purchaselisting/purchaselisting.component';

import { VendorentryComponent } from './vendor/vendorentry/vendorentry.component';
import { AdminComponent } from 'src/app/admin/admin.component'
import { LoginComponent } from 'src/app/login/login/login.component'
import { RegisterComponent } from './register/register/register.component';
import { UserListComponent } from 'src/app/login/user-list/user-list.component'

import {AssetCreationComponent} from  './asset/asset-creation/asset-creation.component'

const routes: Routes = [
  { path:'',redirectTo:'purchase',pathMatch:'full'},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'vendor', component:  VendorComponent},
  { path: 'vendorlist', component:  VendorlistComponent},
  { path:'purchase', component:PurchaselistingComponent},
<<<<<<< HEAD
  { path: 'assets',component:AssetCreationComponent }
=======
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userlist', component: UserListComponent},
  { path: 'register/:userId', component: RegisterComponent}
>>>>>>> 641bba37628b1b837cd79244f8ecef37a8d47061
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
