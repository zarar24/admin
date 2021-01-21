import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DataTablesModule } from 'angular-datatables';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [LayoutComponent,HeaderComponent,FooterComponent,SidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
     AngularmaterialModule,
     FormsModule,
     ReactiveFormsModule,
     DataTablesModule,
     MatFormFieldModule
     
     
     
  ],
  exports: [CommonModule,
    RouterModule,
    AngularmaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutComponent,
    DataTablesModule,
    MatFormFieldModule
    // SidenavComponent
   
    // HeaderComponent,
    // FooterComponent
  ]
})
export class SharedModule { }
