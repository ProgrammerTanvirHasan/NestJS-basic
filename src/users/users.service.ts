import { Injectable, NotFoundException } from '@nestjs/common';

import { userDto } from './dto/user.dto';
import { userInterface } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private items: userInterface[] = [
    { id: 1, name: 'john', age: 32 },
    { id: 2, name: 'pohn', age: 40 },
    { id: 3, name: 'lohn', age: 26 },
  ];
  getAllUsers(): userInterface[] {
    return this.items;
  }
  getUserById(id: number): userInterface {
    const item = this.items.find((item) => item.id === id);
    if (!item) throw new NotFoundException('item not found');
    return item;
  }

  createPost(userdto: userDto): userInterface {
    const newItem: userInterface = {
      id: Date.now(),
      ...userdto,
    };
    this.items.push(newItem);
    return newItem;
  }

  updateItem(id: number, userdto: userDto) {
    const itemIntex = this.items.findIndex((item) => item.id === id);
    if (itemIntex === -1)
      throw new NotFoundException('this item not found to update');
    this.items[itemIntex] = { id, ...userdto };
    return this.items[itemIntex];
  }

  patchItem(id: number, userdto: Partial<userDto>) {
    const fixedItem = this.getUserById(id);
    Object.assign(fixedItem, userdto);
    return fixedItem;
  }

  deletedItem(id: number) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) throw new NotFoundException('no item found to delete');
    const currentUser = this.items.splice(index, 1);
    return { message: 'items deleted', item: currentUser[0] };
  }
}

// DTO input validate করে, Interface output ও internal structure define করে।
