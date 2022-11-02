import { Component, OnInit } from '@angular/core';
import {VendorService} from 'src/app/shared/vendor.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  

  constructor(public vendorService : VendorService) { }

  ngOnInit(): void {
    this.vendorService.bindAllVendors();
    this.vendorService.bindAllSortedVendors();
  }

}
