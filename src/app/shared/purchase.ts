import { AssetType } from "./asset-type";
import { Vendor } from "./vendor";

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
    assetDefinition: object;
    vendor: Vendor;
}