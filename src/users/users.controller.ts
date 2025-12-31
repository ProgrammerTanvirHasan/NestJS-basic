import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { userDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }

  @Post() //@Body decorator use kora hoyece karon je request ta ashbe sheita Body tei ashbe
  createUser(@Body() userdto: userDto) {
    return this.userService.createPost(userdto);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() userdto: userDto) {
    return this.userService.updateItem(Number(id), userdto);
  }

  @Patch(':id')
  patchUser(@Param('id') id: string, @Body() userdto: Partial<userDto>) {
    return this.userService.patchItem(Number(id), userdto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deletedItem(Number(id));
  }
}
