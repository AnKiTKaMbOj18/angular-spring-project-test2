import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AddMobileComponent } from '../add-mobile/add-mobile.component';
import { ListMobileComponent } from '../list-mobile/list-mobile.component';
import { EditMobileComponent } from '../edit-mobile/edit-mobile.component';

const routes: Routes = [
  { path:'login',component:LoginComponent },
  { path:'add-mobile',component:AddMobileComponent },
  { path:'list-mobile',component: ListMobileComponent },
  { path:'edit-mobile',component: EditMobileComponent },
  { path: '',component:LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
