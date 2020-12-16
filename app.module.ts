import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowersComponent } from './flowers/flowers.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { FlowerComponent } from './flower/flower.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlowerService } from './services/flower.service';
import { UserService } from './services/user.service';
import { ContactComponent } from './contact/contact.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { DeletecontactComponent } from './deletecontact/deletecontact.component';
import { DisplaycontactComponent } from './displaycontact/displaycontact.component';
import { ContactService } from './services/contact.service';

var myRoutes:Routes=[
  {path:'shop',component:FlowersComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent}
  

]

@NgModule({
  declarations: [
    AppComponent,
    FlowersComponent,
    LoginComponent,
    CartComponent,
    RegisterComponent,
    FlowerComponent,
    ContactComponent,
    AddcontactComponent,
    DeletecontactComponent,
    DisplaycontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [FlowerService,UserService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
