import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseentryComponent } from './purchaseentry/purchaseentry.component';
import { PurchaselistingComponent } from './purchaselisting/purchaselisting.component';

@NgModule({
  declarations: [PurchaseentryComponent, PurchaselistingComponent],
  imports: [
    CommonModule
  ]
})
export class PurchaseModule { }
