import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts:any = []

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
      this.getAllContacts();
  }

  private getAllContacts() {
    this.contactService.getAllContacts().subscribe(
      response => this.contacts = response
    );
  }
}
