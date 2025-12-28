import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

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
  createUser(@Body() body:{name:string,age:number}){
    return this.userService.createPost(body)
  }
  
  @Put(':id')
  updateUser(@Param('id') id:string, @Body() body:{name:string,age:number}){
  return this.userService.updateItem(Number(id),body)
  }


  @Patch(':id')
   patchUser(@Param('id') id:string,@Body() body :Partial<{name:string,age:number}>){
    return this.userService.patchItem(Number(id),body)
   }

   @Delete(':id')
   deleteUser(@Param('id') id:string){
    return this.userService.deletedItem(Number(id))
   }
}
