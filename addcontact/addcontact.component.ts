import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact/contact'
import {ContactService} from '../services/contact.service'

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  show:boolean=false
  contact:Contact;
  constructor(private contactservice:ContactService) {
    this.contact=new Contact();
   }

   insertContact()
   {
     this.contactservice.addCustomer(this.contact)
   }
   display()
   {
     if(this.show==true)
     {
       this.show=false;
     }
     else
     {
        this.show=true;
     }
   }

  ngOnInit(): void {
  }

}
