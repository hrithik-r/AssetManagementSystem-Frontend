import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AssetModule } from '../app/asset/asset.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AssetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
