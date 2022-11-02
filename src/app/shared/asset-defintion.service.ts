import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AssetDefinition } from './asset-definition';
import { AssetType } from './asset-type';

@Injectable({
  providedIn: 'root'
})
export class AssetDefintionService {
  // global variable
  formAssetData: AssetDefinition = new AssetDefinition()

  //1 list of users
  assets: AssetDefinition[];

  //list of roles
  types: AssetType[];

  constructor(private httpClient: HttpClient) {  }
  
  //1 get all assets
  getAllAssetDefinitions(): Observable<any>{
    return this.httpClient.get(environment.apiHrithik + 'asset-definition/')
  }

  //2 to retrieve all the assets for listing
  bindGetAllAssetDefinitionsList(){
    this.httpClient.get(environment.apiHrithik + 'asset-definition/').toPromise()
    .then(
        (response) =>{
        console.log(response)
        this.assets = response as AssetDefinition[]
      },
    )
  }

  //3 get all types for binding
  bindGetAllAssetTypes(){
    this.httpClient.get(environment.apiHrithik + 'asset-type/').toPromise().then(
      (response) =>{
        console.log(response)
        this.types = response as AssetType[]
      }
    )
  }

  //4 create user
  insertUser(asset: AssetDefinition): Observable<any>{
    console.log("Post")
    return this.httpClient.post(environment.apiHrithik + 'asset-defintion/add', asset)
  }

  //4 update user
  editUser(asset: AssetDefinition): Observable<any>{    
    console.log(asset.assetDefinitionId);
    console.log("Put")
    return this.httpClient.put(environment.apiHrithik + 'users/update', asset)
  }

  //5 delete user
  deleteUser(asset: AssetDefinition){
    console.log(asset.assetDefinitionId);
    var userWish = window.confirm("Do you want to permanently delete the asset?")
    if(userWish == true){
      return this.httpClient.delete(environment.apiHrithik + 'users/delete/' + user.userId)
    }
    else{
      user.isActive = false
      return this.httpClient.put(environment.apiHrithik + 'users/update', user)
    }
  }
}
