import { Injectable } from '@angular/core';
import { AssetType } from './asset-type';
import { Vendor } from './vendor';
import { VendorType } from './vendor-type';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  assetTypes : AssetType[];

  vendors : Vendor[];

  vendorTypes : VendorType[];

  constructor(private httpClient : HttpClient) { }

  bindAllVendors(){
    this.httpClient.get(environment.apiVendor)
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.vendors = response as Vendor[];
      }
    );
  }

  bindAllVendorTypes(){
    this.httpClient.get(environment.apiVendor + 'type')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.vendorTypes = response as VendorType[];
      }
    );
  }

  bindAllAssetType(){
    this.httpClient.get(environment.apiVendor + 'assettype')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.assetTypes = response as AssetType[];
      }
    );
  }
  



}
