import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VendorComponent} from '../../src/app/vendor/vendor/vendor.component'
import {VendorlistComponent} from 'src/app/vendor/vendorlist/vendorlist.component'

import { VendorentryComponent } from './vendor/vendorentry/vendorentry.component';
import { AdminComponent } from 'src/app/admin/admin.component'

import {AssetCreationComponent} from  './asset/asset-creation/asset-creation.component'



const routes: Routes = [
  { path: 'vendor', component:  VendorComponent},
  { path: 'vendorlist', component:  VendorlistComponent},

  { path: 'vendorentry', component:  VendorentryComponent},
  { path: 'admin', component:  AdminComponent},

  { path: 'assets',component: AssetCreationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
