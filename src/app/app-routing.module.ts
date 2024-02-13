import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent} from "./add/add.component";
import {ClientComponent} from "./client/client.component";

const routes: Routes = [
  {path: "",redirectTo: '', pathMatch: 'full'},
  {path: "add", component:AddComponent},
  {path:"client",component:ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
