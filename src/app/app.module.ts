import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AssetModule } from '../app/asset/asset.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { PurchaseModule } from '../app/purchase/purchase.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
<<<<<<< HEAD
    FormsModule,
    AssetModule
=======
    PurchaseModule
>>>>>>> 51dc8e9caa50b1599675c9a818e6f5205a1e44e3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
