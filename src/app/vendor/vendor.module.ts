import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor/vendor.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendorentryComponent } from './vendorentry/vendorentry.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({ 
  declarations: [VendorComponent, VendorlistComponent, VendorentryComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ]
})
export class VendorModule { }
