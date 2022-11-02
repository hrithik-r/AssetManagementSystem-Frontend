import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseentryComponent } from './purchaseentry/purchaseentry.component';
import { PurchaselistingComponent } from './purchaselisting/purchaselisting.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [PurchaseentryComponent, PurchaselistingComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class PurchaseModule { }
