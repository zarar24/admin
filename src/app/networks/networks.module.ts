import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworksRoutingModule } from './networks-routing.module';
import { NetworksComponent } from './networks.component';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './add/edit/edit.component';


@NgModule({
  declarations: [NetworksComponent,EditComponent],
  imports: [
    CommonModule,
    NetworksRoutingModule,
    SharedModule
  ]
})
export class NetworksModule { }
