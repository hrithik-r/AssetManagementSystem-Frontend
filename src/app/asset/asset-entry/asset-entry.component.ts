import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AssetType } from 'src/app/shared/asset-type';
import { PurchaseService } from 'src/app/shared/purchase.service'
import { VendorService } from 'src/app/shared/vendor.service';

@Component({
  selector: 'app-asset-entry',
  templateUrl: './asset-entry.component.html',
  styleUrls: ['./asset-entry.component.scss']
})
export class AssetEntryComponent implements OnInit {

  

  constructor(public purchaseService: PurchaseService, public vendorService : VendorService) { }

  ngOnInit(): void {

    this.vendorService.bindAllAssetType();
    console.log(this.vendorService.assetTypes);
    

    //Get id from prurchase service 
    this.purchaseService.bindGetAllPurchasesList();
  }

  //submit
  onSubmit(form: NgForm){
    console.log(form.value);
  }
}
