import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Assetcreate } from './assetcreate';

@Injectable({
  providedIn: 'root'
})
export class AssetcreateService {

  //global variable: Creating an object for asset
  formAssetData: Assetcreate = new Assetcreate();

  //List of all the assets
  assets: Assetcreate[]; //Array to store all the assets

  constructor(private httpClient: HttpClient) { }

    //Call Rest Api
    //Get all assets --- for testing
    getAllAssets():Observable<any>{
    //http://localhost:9001/api/
    return this.httpClient.get(environment.apiAssets+'assets');
    }

    //Retrieving all assets for listing
    bindGetAllAssets(){
      this.httpClient.get(environment.apiAssets+'assets')
      .toPromise()
      .then(
        response =>{
          console.log(response);
          this.assets=response as Assetcreate[]
        }
      );
    }

  }

