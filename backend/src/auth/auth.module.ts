import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CustomerService } from '../users/user.service';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { User } from '../users/Database/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../users/user.module';
import { Employee } from '../users/Database/entity/employee.enitity';
import { Task } from '../users/Database/entity/task.entity';
import {Contact } from '../users/Database/entity/contact.entity';
import { Meeting } from '../users/Database/entity/meeting.entity';


// import { SessionSerializer } from './session.serializer';


@Module({
  imports : [ UserModule,TypeOrmModule.forFeature([User,Employee,Task,Contact,Meeting]), PassportModule, JwtModule.register({
    secret : 'SECRET',
    signOptions : { expiresIn: '36000s'}
  })],
  providers: [AuthService, LocalStrategy,JwtStrategy,CustomerService],
  exports : [AuthService]

})
export class AuthModule {}




// imports : [UsersService, PassportModule.register({session:true})],
// providers: [AuthService, LocalStrategy,UsersService,SessionSerializer]
