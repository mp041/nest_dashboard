import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CustomerModule } from './Customer/customer.module';
// import { DatabaseModule } from './Customer/Database/Database.module';
import { DataMysqlModule } from './users/Database/Database.module';
// import { TaskModule } from './task_module/task.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service'

@Module({
  imports: [DataMysqlModule,UserModule,AuthModule,UsersService],
  controllers: [AppController],
  providers: [AppService,UsersService],
})
export class AppModule {}
