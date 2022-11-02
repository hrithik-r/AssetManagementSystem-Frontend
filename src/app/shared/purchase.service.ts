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

  sortedPurchase : Purchase[] = [];

  totalPurchase : number = 0;

  constructor(private httpClient:HttpClient) { }

  // getting all purchases list
  bindGetAllPurchasesList(){
    this.httpClient.get(environment.apiUrl+'purchases')
    .toPromise()
    .then((response)=>{
      this.purchases = response as Purchase[];
      this.totalPurchase = this.purchases.length;
    }).catch((error)=>{
      console.log(error); 
    })
  }

  bindSortedPurchases(){
    this.httpClient.get(environment.apiUrl+'purchases')
    .toPromise()
    .then((response)=>{
      this.sortedPurchase = response as Purchase[];
      this.sortPurchaseData();
      this.sortedPurchase = this.sortedPurchase.slice(0,5)
    }).catch((error)=>{
      console.log(error); 
    })
  }

  sortPurchaseData() {
    this.sortedPurchase = this.sortedPurchase.sort((a, b) => {
      return <any>new Date(b.orderDate) - <any>new Date(a.orderDate);
    });
  }

}
