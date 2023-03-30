import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MainSidenavAccordionComponent } from './main-sidenav-accordion/main-sidenav-accordion.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';
import { FormsRoutingModule } from './forms-routing.module';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    InputComponent,
    MainSidenavAccordionComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsRoutingModule,
  ],
  exports: [
    MainSidenavAccordionComponent
  ]
})
export class FormsModule { }
