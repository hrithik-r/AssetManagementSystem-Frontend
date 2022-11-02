import { AssetType } from "./asset-type";
import { Vendor } from "./vendor";
import { AssetDefinition } from "./asset-definition"

export class Purchase {
    pdId:number;
    pdOrderNo: number;
    assetDefinitionId: number;
    assetTypeId: number;
    pdQty: number;
    vendorId: number;
    orderDate: Date;
    deliveryDate: Date;
    pdStatus: String;
    assetType: AssetType;
    assetDefinition: AssetDefinition;
    vendor: Vendor;
}