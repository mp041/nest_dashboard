import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Employee } from './entity/employee.enitity';
import { Task } from './entity/task.entity';
import { Meeting } from './entity/meeting.entity';
import { Contact } from './entity/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mihir',
      password: 'ubuntu',
      database: 'test',
      entities: [User,Employee,Task,Meeting,Contact],
      synchronize: true,
    }),
  ],
})
export class DataMysqlModule {}
