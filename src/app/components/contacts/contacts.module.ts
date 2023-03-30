import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ContactsRoutingModule } from './contacts-routing-module';
import { AddContactComponent } from './add-contact/add-contact.component';
import { SharedModule } from '../shared/shared.module';
import { ContactFormComponent } from './add-contact/contact-form/contact-form.component';



@NgModule({
  declarations: [
    ContactsComponent,
    AddContactComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class ContactsModule { }
