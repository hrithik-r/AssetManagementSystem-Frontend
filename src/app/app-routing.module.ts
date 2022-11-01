import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VendorComponent} from '../../src/app/vendor/vendor/vendor.component'
import {VendorlistComponent} from 'src/app/vendor/vendorlist/vendorlist.component'
import {AssetCreationComponent} from  './asset/asset-creation/asset-creation.component'


const routes: Routes = [
  { path: 'vendor', component:  VendorComponent},
  { path: 'vendorlist', component:  VendorlistComponent},
  { path: 'assets',component: AssetCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
