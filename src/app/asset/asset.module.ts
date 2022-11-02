import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetCreationComponent } from './asset-creation/asset-creation.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AssetEntryComponent } from './asset-entry/asset-entry.component';




@NgModule({
  declarations: [AssetCreationComponent, AssetEntryComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AssetModule { }
