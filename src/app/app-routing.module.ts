import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent} from "./add/add.component";
import {ClientComponent} from "./client/client.component";
import { DeleteComponent} from "./delete/delete.component";
import { UpdateComponent} from "./update/update.component";

const routes: Routes = [
  {path: "",redirectTo: '', pathMatch: 'full'},
  {path: "add", component:AddComponent},
  {path:"client",component:ClientComponent},
  {path:"delete",component:DeleteComponent},
  {path:"update",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
