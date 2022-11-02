import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetCreationComponent } from './asset-creation/asset-creation.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AssetDefinitionComponent } from './asset-definition/asset-definition.component';



@NgModule({
  declarations: [AssetCreationComponent,AssetDefinitionComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AssetModule { }
