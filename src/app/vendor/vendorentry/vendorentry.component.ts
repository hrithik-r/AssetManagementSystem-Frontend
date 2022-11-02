import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/shared/vendor.service';

@Component({
  selector: 'app-vendorentry',
  templateUrl: './vendorentry.component.html',
  styleUrls: ['./vendorentry.component.scss']
})
export class VendorentryComponent implements OnInit {

  constructor(public vendorService : VendorService, public router : Router) { }

  onSubmit(form : NgForm){
    console.log(form.value);
    
    let insertId = this.vendorService.formVendorData.vendorId;
    if(insertId == 0 || insertId == null){
      console.log("adding the vendor");
      this.addVendor(form);
      
    }
    else{
      console.log("updating vendor");
      this.updateVendor(form);
    }
    this.router.navigateByUrl('vendorlist');
  }

  ngOnInit(): void {
    this.vendorService.bindAllAssetType();
    this.vendorService.bindAllVendorTypes();
  }


  addVendor(form ?: NgForm){
    this.vendorService.addVendor(form.value).subscribe((res:any) =>{
      console.log(res);
    },
    (err:any)=>{
      console.log(err);
    }
    )
    this.vendorService.bindAllVendors();

  }

  updateVendor(form ?: NgForm){
    this.vendorService.updateVendor(form.value).subscribe((res:any) =>{
      console.log(res);
    },
    (err:any)=>{
      console.log(err);
    }
    )
    this.vendorService.bindAllVendors();
  }



}
