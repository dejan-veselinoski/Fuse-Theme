import { Component, HostListener, OnInit } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  formAction: string = 'preview';
  contactList: Array<Contact> = [];
  contactListSorted: Array<Contact> = [];
  selectedContact!: Contact;
  sidenavMode: any = 'side';

  constructor(){}

  ngOnInit(): void {
    // dummy data
    let u1 = new Contact();
    u1.fullName = 'Alice Harding';
    u1.title = 'Track Service Worker';
    u1.email = 'alice@email.com';
    u1.company = 'DV Corp';
    u1.avatar = 'https://angular-material.fusetheme.com/assets/images/avatars/female-12.jpg';
    u1.id = 111;

    let u2 = new Contact();
    u2.fullName = 'Alissa Nelson';
    u2.title = 'Bindery Machine Operator';
    u2.email = 'alissa@email.com';
    u2.company = 'TechUp';
    u2.avatar = 'https://angular-material.fusetheme.com/assets/images/avatars/female-05.jpg';
    u2.id = 222;

    let u3 = new Contact();
    u3.fullName = 'Barber Johnson';
    u3.title = 'Talent Manager';
    u3.email = 'barber@email.com';
    u3.avatar = 'https://angular-material.fusetheme.com/assets/images/avatars/male-09.jpg';
    u3.id = 333;

    this.contactList.push(u1, u2, u3);
    this.sortContacts();
  }

  addNewContact() {
    this.formAction = 'preview';
    this.selectedContact = new Contact();
  }

  onSelectContact(contact: Contact) {
    this.selectedContact = contact;
    this.formAction = 'preview';
  }

  setFormAction(event: any) {
    this.formAction = event;
  }

  updateContactList(event: any) {
    if (event.id) {
      const index = this.contactList.findIndex(el => el.id == event.id);
      if (index != -1) {
        this.contactList[index] = event;
      }
    else {
      this.contactList.push(event);
    }
    }
    this.sortContacts();
  }

  sortContacts() {
    this.contactListSorted = this.contactList.reduce((acc: any, curr: any) => {
      const idx = acc.findIndex((e: any) => e.alphabet === curr.fullName![0]);
      if (idx === -1) {
        acc.push({ alphabet: curr.fullName[0], record: [curr] });
      }
      else {
        acc[idx].record.push(curr);
        acc[idx].record.sort((r1: any, r2: any) => r1.fullName > r2.fullName ? 1 : -1);
      }
      return acc;
    }, []).sort((e1: any, e2: any) => e1.alphabet > e2.alphabet ? 1 : -1);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth < 992) {
      this.sidenavMode = 'over';
    } else {
      this.sidenavMode = 'side';
    }
  }

}
