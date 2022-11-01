import { AssetType } from "./asset-type";
import { VendorType } from "./vendor-type";

export class Vendor {
    vendorId : number = 0;
    vendorName : string = "";
    vendorTypeId : number;
    vendorType : VendorType;
    assetTypeId : number;
    assetType : AssetType;
    validFrom : Date;
    validTo : Date;
    address : string;
    active : boolean;

}
