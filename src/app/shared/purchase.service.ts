import { Injectable } from '@angular/core';
import { Purchase } from './purchase';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  //  Object for retreiving the purchase data
  purchaseData: Purchase = new Purchase();

  // getting all the data in purchases array
  purchases:Purchase[];

  constructor(private httpClient:HttpClient) { }

  // getting all purchases list
  bindGetAllPurchasesList(){
    this.httpClient.get(environment.apiUrl+'purchases')
    .toPromise()
    .then((response)=>{
      this.purchases = response as Purchase[];
    }).catch((error)=>{
      console.log(error); 
    })
  }

}
