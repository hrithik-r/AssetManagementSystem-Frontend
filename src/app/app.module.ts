import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AssetModule } from '../app/asset/asset.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { PurchaseModule } from '../app/purchase/purchase.module'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AssetModule,
    PurchaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
