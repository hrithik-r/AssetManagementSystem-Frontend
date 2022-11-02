import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assetcreate } from './assetcreate';

@Injectable({
  providedIn: 'root'
})
export class AssetcreateService {

  //global variable: Creating an object for asset
  formAssetData: Assetcreate = new Assetcreate();

  //List of all the assets
  assets: Assetcreate[]; //Array to store all the assets

  constructor(private httpClient: HttpClient) { 

    //http://localhost:9001/api/
    
  }
}
