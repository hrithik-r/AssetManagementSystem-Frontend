import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorComponent } from './vendor/vendor.component';
import { AssetCreationComponent } from './asset-creation/asset-creation.component';
import { AssetDefinitionComponent } from './asset-definition/asset-definition.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    VendorComponent,
    AssetCreationComponent,
    AssetDefinitionComponent,
    PurchaseOrderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
