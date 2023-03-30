import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() contact: EventEmitter<Contact> = new EventEmitter<Contact>();
  @Input() selectedContact!: Contact;
  contactForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
  ){
    this.initForm();
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['selectedContact']) {
      if (this.selectedContact) {
        this.contactForm.patchValue({
          name : this.selectedContact.fullName,
          title : this.selectedContact.title,
          company : this.selectedContact.company,
          email : this.selectedContact.email
        })
      }
    }
  }

  initForm() {
    this.contactForm = this._formBuilder.group({
      name : [null, Validators.required],
      title : [null, Validators.required],
      company : null,
      email : null
    })
  }

  onCancel() {
    this.cancel.emit(true);
  }

  onSave() {
    let _contactObj = new Contact();
    _contactObj.fullName = this.contactForm.get('name')?.value;
    _contactObj.title = this.contactForm.get('title')?.value;
    _contactObj.company = this.contactForm.get('company')?.value;
    _contactObj.email = this.contactForm.get('email')?.value;
    _contactObj.id = this.selectedContact && this.selectedContact.id ? this.selectedContact.id : Math.floor(Math.random()*(999-100+1)+100);

    this.contactForm.reset();

    this.contact.emit(_contactObj);
  }

}
