import { Flower } from '../models/flower';

export class FlowerService{
    flowers:Flower[];
    cart:Flower[];
    constructor(){
        this.flowers=[
            new Flower(1,"Rose",25,5,"assets/iphone11.jpg"),
            new Flower(2,"Lilly",12,15,"assets/iphone12.jpg"),
            new Flower(3,"Orchid",75,4,"assets/iphone11.jpg")
        ]
        this.cart=[];
    }
    getFlowers():Flower[]{
        return this.flowers;
    }
    getCart():Flower[]{
        return this.cart;
    }
    buyFlower(flower:Flower){
        this.cart.push(flower);
    }
    getFlower(id:number):any{
        for (let index = 0; index < this.flowers.length; index++) {
           if(this.flowers[index].id==id){
               return this.flowers[index];
           }
        }
        return null;
    }
}