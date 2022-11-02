import { Component, OnInit } from '@angular/core';
import {VendorService} from 'src/app/shared/vendor.service'
import {PurchaseService} from 'src/app/shared/purchase.service'
import {AssetcreateService} from 'src/app/shared/assetcreate.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  

  constructor(public vendorService : VendorService, public purchaseService : PurchaseService, public assetcreateService : AssetcreateService) { }

  ngOnInit(): void {
    this.vendorService.bindAllSortedVendors();
    this.purchaseService.bindSortedPurchases();
    this.assetcreateService.bindSortedPurchases();
  }

}
