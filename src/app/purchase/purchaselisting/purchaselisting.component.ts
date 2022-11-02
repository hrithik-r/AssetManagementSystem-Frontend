import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../../shared/purchase.service'

@Component({
  selector: 'app-purchaselisting',
  templateUrl: './purchaselisting.component.html',
  styleUrls: ['./purchaselisting.component.scss']
})
export class PurchaselistingComponent implements OnInit {

  constructor(public purchaseService:PurchaseService) { }

  ngOnInit(): void {
    this.purchaseService.bindGetAllPurchasesList();
  }

}
