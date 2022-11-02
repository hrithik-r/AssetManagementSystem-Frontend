import { Component, OnInit } from '@angular/core';
import { AssetDefintionService } from 'src/app/shared/asset-defintion.service';

@Component({
  selector: 'app-asset-definition',
  templateUrl: './asset-definition.component.html',
  styleUrls: ['./asset-definition.component.scss']
})
export class AssetDefinitionComponent implements OnInit {

  constructor(public adService: AssetDefintionService) { }

  ngOnInit(): void {
  }

}
