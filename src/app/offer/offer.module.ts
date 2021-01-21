import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferCategoryComponent } from './offer-category/offer-category.component';
import { SharedModule } from '../shared/shared.module';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [OfferCategoryComponent,AddComponent],
  imports: [
    CommonModule,
    OfferRoutingModule,
    SharedModule
  ]
})
export class OfferModule { }
