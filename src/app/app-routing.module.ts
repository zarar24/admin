import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared';

const routes: Routes = [

  {path: "", pathMatch: "full", redirectTo: "/login"},
  {path: 'login',loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {
  path: "",
  component: LayoutComponent,
  children: [
  {path: 'dashboard',loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'network',loadChildren: () => import('./networks/networks.module').then(m => m.NetworksModule)},
  {path: 'offer',loadChildren: () => import('./offer/offer.module').then(m => m.OfferModule)}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
