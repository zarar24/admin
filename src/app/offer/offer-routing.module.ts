import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { OfferCategoryComponent } from './offer-category/offer-category.component';

const routes: Routes = [
  {
        path: "",
        component: OfferCategoryComponent
      },
      {
        path: "add",
      component:AddComponent
      }  
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
