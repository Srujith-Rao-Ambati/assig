import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import{Flower} from '../models/flower';
import { element } from 'protractor';

import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnChanges {

  cart:Flower[];
  subTotal:number[];
  grandTotal:number;
  constructor(private flowerService:FlowerService) {
    this.cart=this.flowerService.getCart();
    this.subTotal=[];
    this.initSubTotal();
    this.grandTotal=0;
   }

  ngOnChanges(change:SimpleChanges):void{
    console.log("Changed");
  }

  initSubTotal(){
    this.subTotal = [];
    this.cart.forEach(element =>{
      this.subTotal.push(element.price*element.quantity);
      this.grandTotal=+element.price*element.quantity;
    })
   }
  
   calculateTotal(){
     this.initSubTotal();
   }

  ngOnInit(): void {

  }

}