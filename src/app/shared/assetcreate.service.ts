import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assetcreate } from './assetcreate';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssetcreateService {

  //global variable: Creating an object for asset
  formAssetData: Assetcreate = new Assetcreate();

  //List of all the assets
  assets: Assetcreate[]; //Array to store all the assets

  //for admin
  // count of assets
  totalAssets : number = 0;

  // sorted assets
  sortedAssets : Assetcreate[] = [];

  constructor(private httpClient: HttpClient) { 

    //http://localhost:9001/api/
    
  }


  //binding 5 assets in assending order
  bindSortedPurchases(){
    this.httpClient.get(environment.apiUrl+'')
    .toPromise()
    .then((response)=>{
      this.sortedAssets = response as Assetcreate[];
      this.totalAssets = this.sortedAssets.length;
      this.sortAseetData();
      this.sortedAssets = this.sortedAssets.slice(0,5)
    }).catch((error)=>{
      console.log(error); 
    })
  }

  sortAseetData() {
    this.sortedAssets = this.sortedAssets.sort((a, b) => {
      return <any>new Date(b.purchDate) - <any>new Date(a.purchDate);
    });
  }

}
