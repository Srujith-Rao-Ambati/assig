import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact/contact'
import {ContactService} from '../services/contact.service'
@Component({
  selector: 'app-displaycontact',
  templateUrl: './displaycontact.component.html',
  styleUrls: ['./displaycontact.component.css']
})
export class DisplaycontactComponent implements OnInit {

  name:string;
  cont:Contact;
  contacts:Contact[]
  constructor(private contactservice:ContactService) { 
    this.contacts=this.contactservice.getCustomers();
  }
/* showContact(name:any)
{
  this.cont=this.contactservice.getCustomer(name)
} */
  ngOnInit(): void {
  }

}
