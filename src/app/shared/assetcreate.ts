import { AssetType } from "./asset-type";
import { Vendor } from "./vendor";

export class Assetcreate {
    aMId: number = 0;
    assetType: AssetType;
    vendor: Vendor;
    // assetDef: AssetDefinition;
    aMModel: String='';
    aMSerialNum: String='';
    aMMyYear: Date;
    purchDate: Date;
    amWarranty: number;
    warrantyFrom:Date;
    warrantyTo:Date;
}
