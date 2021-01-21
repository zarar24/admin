import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './add/edit/edit.component';
import { NetworksComponent } from './networks.component';

const routes: Routes = [
  {
    path: "", component: NetworksComponent
  },
  {
    path: "edit",
    component: EditComponent
  },
  {
    path: "add",
    component: AddComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworksRoutingModule { }
