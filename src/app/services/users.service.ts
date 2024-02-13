import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getUsers(){
    const users=[
      {userId:10, userName:'abhishek'},
      {userId:20, userName:'Dinesh'},
      {userId:30, userName:'ram'}
      ];
    return users;
  }
}
