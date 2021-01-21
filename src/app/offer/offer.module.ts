import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferCategoryComponent } from './offer-category/offer-category.component';

import { AddComponent } from './add/add.component';
import { SharedModule } from '../shared';
import { EditOfferComponent } from './edit-offer/edit-offer.component';


@NgModule({
  declarations: [OfferCategoryComponent,AddComponent, EditOfferComponent],
  imports: [
    CommonModule,
    OfferRoutingModule,
    SharedModule
  ]
})
export class OfferModule { }
