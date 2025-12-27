import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({})
export class UsersModule {
  import: [];
  controllers: [UsersController];
  providers: [UsersService];
}
