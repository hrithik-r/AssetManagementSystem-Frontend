import { Injectable } from '@angular/core';
import { AssetType } from './asset-type';
import { Vendor } from './vendor';
import { VendorType } from './vendor-type';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  formVendorData : Vendor = new Vendor;

  assetTypes : AssetType[];

  vendors : Vendor[];

  vendorTypes : VendorType[];

  totalVendors : number = 0;

  sortedVendors : Vendor[] = [];


  constructor(private httpClient : HttpClient) { }

  bindAllVendors(){
    this.httpClient.get(environment.apiVendor)
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.vendors = response as Vendor[];
        this.totalVendors = this.vendors.length;
        this.sortVendorData();
        // console.log("sorted vendors");
        
        // console.log(this.sortedVendors);
        
      }
    );
  }

  bindAllSortedVendors(){
    this.httpClient.get(environment.apiVendor)
    .toPromise()
    .then(
      (response) => {
        this.sortedVendors = response as Vendor[];
        this.sortVendorData();
        this.sortedVendors = this.sortedVendors.slice(0,5);
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
  

  addVendor(vendor : Vendor) : Observable<any>{
    vendor.createdTime = new Date;
    vendor.lastUpdate = new Date;
    return this.httpClient.post(environment.apiVendor , vendor);
  }

  updateVendor(vendor : Vendor) : Observable<any>{
    return this.httpClient.put(environment.apiVendor, vendor);
  }

  deleteVendor(vendorId : number) : Observable<any>{
    console.log(vendorId);
    console.log(environment.apiVendor + 'delete/' + vendorId);
    
    return this.httpClient.delete('http://localhost:9001/api/vendor/delete/' + vendorId);
  }


  sortVendorData() {
    this.sortedVendors = this.sortedVendors.sort((a, b) => {
      return <any>new Date(b.createdTime) - <any>new Date(a.createdTime);
    });
  }

}
