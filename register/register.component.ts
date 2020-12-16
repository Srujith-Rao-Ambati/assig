import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


user:User;
constructor()
{
  this.user=new User();
}
register(u:any)
{

  console.log(u)
}

  ngOnInit(): void {
  }

}
