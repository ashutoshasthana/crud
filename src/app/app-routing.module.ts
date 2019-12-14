import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component'; 
import {ShowreordsComponent} from './showreords/showreords.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"update",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"show",component:ShowreordsComponent},
  {path:"",component:LoginComponent,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
