import { AssetType } from "./asset-type";
import { VendorType } from "./vendor-type";

export class Vendor {
    vendorId : number = 0;
    vendorName : string = "";
    vendorTypeId : number = 0;
    vendorType : VendorType;
    assetTypeId : number = 0;
    assetType : AssetType;
    validFrom : Date;
    validTo : Date;
    address : string = "";
    createdTime : Date;
    lastUpdate : Date;
    active : boolean = false;

}
