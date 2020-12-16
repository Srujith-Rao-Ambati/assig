import { newArray, stringify } from '@angular/compiler/src/util';
import {Contact} from '../contact/contact'
export class ContactService{
    contacts:Contact[];
    constructor()
    {
        this.contacts=[
            new Contact("Anna",9949023202),
            new Contact("Maatha ji",9059330241),
            new Contact("Dada",9059460702),
            

        ];

    }

    addCustomer(contact:Contact)
    {
        this.contacts.push(contact);
    }

    deleteCustomer(name:string)
    {
        for(let index=0;index<this.contacts.length;index++)
        {
            if(this.contacts[index].name==name)
            {
                this.contacts.splice(index,1);
                break;
            }
        }
    }


    getCustomer(name:any):any
    {
        for(let index=0;index<this.contacts.length;index++)
        {
            if(this.contacts[index].name==name)
            {
              return  this.contacts[index];
            }
        }
    }

    getCustomers():Contact[]{
        return this.contacts.sort();
    }

}