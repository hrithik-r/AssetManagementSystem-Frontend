import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AssetModule } from '../app/asset/asset.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { PurchaseModule } from '../app/purchase/purchase.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component'
import { UserService } from './shared/user.service';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserListComponent } from './login/user-list/user-list.component';
import { AssetDefinitionComponent } from './asset/asset-definition/asset-definition.component';
import { AssetDefintionService } from './shared/asset-defintion.service';

@NgModule({
  declarations: [
    AppComponent,,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    AssetDefinitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AssetModule,
    PurchaseModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthService, UserService, AssetDefintionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
