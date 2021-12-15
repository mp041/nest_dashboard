import { Injectable, InternalServerErrorException } from '@nestjs/common';
// import { type } from 'os';

export type User = {
    id:number;
    name:string;
    username:string;
    password:string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id:1,
            name: 'Mihir',
            username : 'mihir',
            password : 'pass'
        },
        {
            id: 2,
            name : 'Panchal',
            username : 'panchal',
            password : 'pass'
        },{
            id: 3,
            name : 'naruto',
            username : 'demo',
            password : 'demo'
        }
    ]

async findOne(username:string): Promise<User | undefined> {
    console.log(this.users);
    return this.users.find(user => user.username === username)
}

public async register(data : any): Promise<any>{
    console.log(data);

    try {
        this.users.push(data);
        console.log(data,"miid")
        // console.log(user,"last")

        return Promise.resolve(data)

    } catch (error) {
        console.log("after register");

        throw new InternalServerErrorException(error);
    }
}


}
