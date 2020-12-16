export class User{
    name:string;
    phone:number;
    age:number;
    userName:string;
    password:string;
    constructor(userName:string="",password:string="",name:string="",age:number=0,phone:number=0)
    {
        this.userName=userName
        this.password=password
        this.name=name
        this.age=age
        this.phone=phone
    }
}
