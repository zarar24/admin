import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { OfferCategoryComponent } from './offer-category/offer-category.component';

const routes: Routes = [
  {
        path: "",
        component: OfferCategoryComponent
      },
      {
        path: "add",
      component:AddComponent
      },
      {
        path: "edit-offer",
      component:EditOfferComponent
      }  
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
