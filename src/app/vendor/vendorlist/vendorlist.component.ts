import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/shared/vendor.service'

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {

  constructor(public vendorService : VendorService) { }

  ngOnInit(): void {
    this.vendorService.bindAllVendors();

  }

}
