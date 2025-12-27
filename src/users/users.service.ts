import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private items = [
    { id: 1, name: 'john' },
    { id: 2, name: 'pohn' },
    { id: 3, name: 'lohn' },
  ];
  getAllUsers() {
    return this.items;
  }
  getUserById(id: number) {
    return this.items.find((item) => item.id === id);
  }
}
