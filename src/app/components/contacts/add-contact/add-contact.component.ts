import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  @Input() formAction!: string;
  @Input() selectedContact!: Contact;
  @Output() _formAction: EventEmitter<string> = new EventEmitter<string>();
  @Output() contact: EventEmitter<Contact> = new EventEmitter<Contact>();

  bannerImage!: string;
  action: string = 'preview';
  selectedAvatar!: any;

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['selectedContact']) {
      if (this.selectedContact && this.selectedContact.id) {
        this.bannerImage = 'https://angular-material.fusetheme.com/assets/images/cards/24-640x480.jpg';
        this.selectedAvatar = this.selectedContact.avatar;
      } else {
        this.bannerImage = '';
        this.selectedAvatar = '';
      }
    }
  }

  ngOnInit(): void {
  }

  editForm(action: string) {
    this.formAction = action;
    this._formAction.emit(action);
  }

  saveContact(event: Contact) {
    event.avatar = this.selectedAvatar;
    this.selectedContact = event;
    this.contact.emit(event);
    this._formAction.emit('preview');
  }

  selectFile(event: any): void {
    const files = event.target.files;

    if (files) {
      const file: File | null = files.item(0);

      if (file) {
        this.selectedAvatar = '';
        const currentFile = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.selectedAvatar = e.target.result;
        };

        reader.readAsDataURL(currentFile);
      }
    }
  }

}
