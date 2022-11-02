import { Component, OnInit } from '@angular/core';
import { AssetcreateService } from 'src/app/shared/assetcreate.service'

@Component({
  selector: 'app-asset-creation',
  templateUrl: './asset-creation.component.html',
  styleUrls: ['./asset-creation.component.scss']
})
export class AssetCreationComponent implements OnInit {

  constructor(public assetsService:AssetcreateService) { }

  //Life cycle hook  -- initializing first time
  ngOnInit(): void {
    console.log ("Life Cycle hook invoked");

    //Testing
    this.assetsService.bindGetAllAssets();
  }

  //Subscribe getAllAssets
  getAllAssets(){
    this.assetsService.getAllAssets().subscribe(
      response =>{
        console.log("Retrieving from list ... .. .")
        console.log(response)
      },
      (error)=>{
        console.log("Something went wring")
      }
    );
  }

}
