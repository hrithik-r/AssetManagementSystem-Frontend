import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor/vendor.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendorentryComponent } from './vendorentry/vendorentry.component';



@NgModule({
  declarations: [VendorComponent, VendorlistComponent, VendorentryComponent],
  imports: [
    CommonModule
  ]
})
export class VendorModule { }
