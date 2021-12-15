import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './user.controller';
import { CustomerService } from './user.service';
import { User } from './Database/entity/user.entity';
import { CustomerSchema } from './Schema/customers.schema';
import { UsersService } from './users.service'
import { Employee } from './Database/entity/employee.enitity';
import { Task } from './Database/entity/task.entity';
import {Contact } from './Database/entity/contact.entity';
import { Meeting } from './Database/entity/meeting.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User,Employee,Task,Contact,Meeting])],
  controllers: [CustomerController],
  providers: [CustomerService,UsersService],
  exports : [UsersService]
})
export class UserModule {}
