import { User } from '../models/user';

export class UserService{
    users:User[];
    constructor(){
        this.users=[
            new User("ramu123","Ramu"),
            new User("bhimu123","Bhimu")
        ]
    }
    userLogin(user:User):boolean{
        var result:boolean=false;
        this.users.forEach(element=>{
            if(element.userName==user.userName&&element.password==user.password)
                result=true;
        })
        return result
    }
}
