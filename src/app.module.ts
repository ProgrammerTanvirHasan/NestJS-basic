import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { MynameController } from './myname/myname.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, UsersController, MynameController],
  providers: [AppService, UsersService],
})
export class AppModule {}
