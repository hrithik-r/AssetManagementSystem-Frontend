import { AssetType } from "./asset-type"

export class AssetDefinition {
    assetDefinitionId: number
    assetDefinitionName: string
    assetDefinitionClass: string
    assetTypeId: number
    isActive: boolean
    assetType: AssetType
}
