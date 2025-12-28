import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private items = [
    { id: 1, name: 'john',age:32 },
    { id: 2, name: 'pohn',age:40 },
    { id: 3, name: 'lohn',age:26 },
  ];
  getAllUsers() {
    return this.items;
  }
  getUserById(id: number) {
    const item= this.items.find((item) => item.id === id);
    if(!item) throw new NotFoundException("item not found");
    return item;
  }
   
  createPost(data:{name:string;age:number}){
     const newItem={
      id:Date.now(),
      ...data
     }
     this.items.push(newItem)
     return newItem;
  }

  updateItem(id:number,data:{name:string,age:number}){
    const itemIntex=this.items.findIndex((item)=>item.id===id)
    if(itemIntex=== -1) throw new NotFoundException("this item not found to update");
    this.items[itemIntex]={id,...data};
    return this.items[itemIntex];
  }

  patchItem(id:number,data:Partial<{name:string,age:number}>){
    const fixedItem=this.getUserById(id);
    Object.assign(fixedItem,data);
    return fixedItem;
  }

  deletedItem(id:number){
 const index=this.items.findIndex((item)=>item.id===id)
 if(index=== -1) throw new NotFoundException("no item found to delete");
 const currentUser=this.items.splice(index,1);
 return {message:"items deleted",item:currentUser[0]};

  }
  

}
