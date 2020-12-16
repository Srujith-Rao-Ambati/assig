import { Component, OnInit } from '@angular/core';
import {Contact} from './contact'
import {ContactService} from '../services/contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts:Contact[];
  constructor(private contactservice:ContactService) {
    this.contacts=this.contactservice.getCustomers();
   }
   delete(name:any)
   {
     this.contactservice.deleteCustomer(name)
   }

  ngOnInit(): void {
  }

}
