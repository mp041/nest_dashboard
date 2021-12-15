import { Injectable, InternalServerErrorException, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
// import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { User } from './Database/entity/user.entity';
import { UserDto } from './dto/index';
// import { Customer } from './interface/user';
// import { uuid } from 'uuidv4';
import * as bcrypt from 'bcrypt';




@Injectable()
export class CustomerService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) { }



  public async listCustomer(): Promise<User[]> {
    return await this.userRepo.find({})
  }







  public async getCustomer(email: string): Promise<any> {
    console.log(email)
    const data = await this.userRepo.find({ email })
    // console.log(data);
    if (!email) {
      throw new NotFoundException('user Not Found')
    }
    return data;
    //     console.log(email)
    //     if(!data){
    //         throw new NotFoundException('user not found');
    //     }
    //     return data;
  }

  public async getCustomerbyID(id: string): Promise<any> {

    // console.log(id)

    const data = await this.userRepo.findOne(id);
    // console.log(data,"dataaaaaaaaaaaaaaaaaaaaaa")
    // if(data){
    //   if()
    //   throw new NotFoundException('user Not Found')
    //
    // }
    // console.log(data);
    return await this.userRepo.find(data)
  }






  public async createCustomer(data: UserDto): Promise<any> {
    try {
      const email = data.email;
      // console.log(email)
      // console.log(data.password);
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(data.password, saltOrRounds);

      console.log(hash, "hasssssssssssssssssssssssssss")
      // // const l = data.email;
      if (email) {
        // console.log("demmooooooooooooooooooooooooo")
        const edata = await this.userRepo.find({ email });
        // console.log(edata, "edataaaaaaaaaaa");

        if (edata.length === 0) {
          const person = {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email,
            password: hash
          }


          const user = await this.userRepo.create(person);
          await this.userRepo.save(user);
          // data.id = uuid();

          return user;


          // if (edata[0].email === email) {
          //   console.log("founddddddd")
          //
          //   throw new NotFoundException("User already found");
          // }
        } else {
          // if(edata[0].email === email)
          console.log("founddddddd")
          //
          throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'User is already Exist!!!!',

          }, HttpStatus.FORBIDDEN);

        }
        // console.log()

      }
      // const user = await this.userRepo.create(data);
      // await this.userRepo.save(user);
      // data.id = uuid();
      //
      // return user;


      // const edata = await this.userRepo.find({email})

      // console.log(data.email,"creatttttttttttttttttttttttt");
      // if(data.email === )



      // console.log(this.user,"userffffffffffffffffffffffffffffffff");
      // const person = {
      //     firstName:user.firstName,
      //     lastName:user.lastName,
      //     id:user.id,
      //     isActive:user.isActive,
      //     email:user.email
      // }
      // user.firstName = "Mihir";
      // user.lastName = "Panchal";
      // user.id = 121;
      // user.isActive = true;
      // user.email = 'demo@gmail.com';

      // const saveperson =await this.userRepo.create(user);
      //
      // await this.userRepo.save(user);
      // console.log(user,"nfaknkfanakfkak");
      //
      // return saveperson;
      // return saveperson;
      // return await this.userRepo.save(user);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

  }
  // user(user: any, arg1: string) {
  //     throw new Error('Method not implemented.');
  // }





  public async updateCustomer(id: string, customerdto: UserDto): Promise<any> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(customerdto.password, saltOrRounds);

    const person = {
      firstName: customerdto.firstName,
      lastName: customerdto.lastName,
      phone: customerdto.phone,
      email: customerdto.email,
      password: hash
    }
    console.log(customerdto, "CustomerDto")
    const update = await this.userRepo.update(id, person);
    const data = await this.userRepo.findOne(id)
    console.log(update);

    return data;
  }






  public async removeCustomer(id: string): Promise<User> {
    const data = await this.userRepo.findOne(id);

    if (!data) {
      throw new NotFoundException('user not found');
    }

    return await this.userRepo.remove(data);
  }


}
