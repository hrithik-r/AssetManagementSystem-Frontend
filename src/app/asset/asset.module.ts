import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetCreationComponent } from './asset-creation/asset-creation.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AssetEntryComponent } from './asset-entry/asset-entry.component';

import { AssetDefinitionComponent } from './asset-definition/asset-definition.component';



@NgModule({
<<<<<<< HEAD
  declarations: [AssetCreationComponent, AssetEntryComponent],
=======
  declarations: [AssetCreationComponent,AssetDefinitionComponent],
>>>>>>> 641bba37628b1b837cd79244f8ecef37a8d47061
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AssetModule { }
