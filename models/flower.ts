export class Flower{
    id:number=0;
    name:string="";
    price:number=0;
    quantity:number=0;
    pic:string="";

    constructor(id:number=0,name:string="",price:number=0,quantity:number=0,pic:string=""){
        this.id=id;
        this.name=name;
        this.price=price;
        this.quantity=quantity;
        this.pic=pic;
    }
}