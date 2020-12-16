import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact/contact'
import {ContactService} from '../services/contact.service'
@Component({
  selector: 'app-deletecontact',
  templateUrl: './deletecontact.component.html',
  styleUrls: ['./deletecontact.component.css']
})
export class DeletecontactComponent implements OnInit {

contacts:Contact[]
  constructor(private contactservice:ContactService) {
    this.contacts=this.contactservice.getCustomers();
   }

   delete(contactname:any)
   {
     this.contactservice.deleteCustomer(contactname.value)
   }
  ngOnInit(): void {
  }

}
