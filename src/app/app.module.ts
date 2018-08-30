import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { EditMobileComponent } from './edit-mobile/edit-mobile.component';
import { ListMobileComponent } from './list-mobile/list-mobile.component';
import { AppRoutingModule } from './app.routing/app.routing.module';
import { MobileService } from './service/mobile.service';
import { AuthenticationService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddMobileComponent,
    EditMobileComponent,
    ListMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MobileService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
