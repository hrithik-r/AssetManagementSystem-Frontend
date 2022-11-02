import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Vendor } from 'src/app/shared/vendor';
import { VendorService } from 'src/app/shared/vendor.service'

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {

  constructor(public vendorService : VendorService, public router : Router) { }

  ngOnInit(): void {
    this.vendorService.bindAllVendors();

  }

  // populate form
  populateForm(vendor : Vendor){
    console.log(vendor);
    this.vendorService.formVendorData = Object.assign({},vendor);
    this.router.navigateByUrl('vendorentry');

    
  }

  deleteVendor(vendor : Vendor){
    console.log(vendor);
    let userWish = window.confirm("Do you want to Delete Vendor Permanently?");

    if(userWish == true){
      console.log("Deleting vendor permenently");
      this.vendorService.deleteVendor(vendor.vendorId);
      this.vendorService.bindAllVendors();
      
    }
    else{
      vendor.active = false;
      this.vendorService.updateVendor(vendor);
    }
    
  }

}
