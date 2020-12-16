import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {User} from '../models/user';
import { UserService } from '../services/user.service';
import { NotAllowedUsername } from './notAllowedUsername.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  myForm:FormGroup;
  resultMsg:string
  constructor(private userservice:UserService,private route:Router) {
    this.user=new User();
    this.myForm=new FormGroup({
      userName:new FormControl(null,[Validators.required,Validators.minLength(6),NotAllowedUsername.notAllowedName]),
      password:new FormControl(null,[Validators.required,Validators.pattern("[A-Z][a-z][a-z][a-z]")])
    });
    this.resultMsg="";
   }
public get userName() : any{
return this.myForm.get("userName")
}
public get password() : any{
  return this.myForm.get("password")
  }
 loginCheck()
 {
   if(this.myForm.valid)
      {
        var user:User=new User();
        user.userName=this.userName.value;
        user.password=this.password.value;
        if(this.userservice.userLogin(user))
            this.route.navigate(["shop"]);
        else
            this.resultMsg="Invalid user";
      }
      console.log("not good")
 } 
  ngOnInit(): void {
  }

}