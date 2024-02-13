import { Component,OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements  OnInit{
 users:any;
  constructor(private usersservice:UsersService) { }
  ngOnInit() {
    this.users=this.usersservice.getUsers();
  }


}
