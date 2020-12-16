import { Component,EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Flower } from '../models/flower';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

  @Input()flower:Flower;
  @Output() calculate=new EventEmitter<number>();
  constructor() { 
    this.flower = new Flower();
  }
  ngOnChanges(changes:SimpleChanges):void{
    console.log("flower changed");
    this.calculate.emit(1);
  }
  ngOnInit(): void {
  }

}