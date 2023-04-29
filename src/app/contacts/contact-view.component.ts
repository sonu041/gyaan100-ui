import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from './contacts.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contact } from './contact';


@Component({
    selector: 'app-contacts-view',
    templateUrl: './contact-view.component.html',
    styleUrls: ['./contacts.component.css']
  })

export class ContactViewComponent implements OnInit{

  id: any;
  contact!: Contact;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
  ) { }

    ngOnInit() { 
        this.id = this.route.snapshot.paramMap.get('id');
        this.contactsService.find(this.id).subscribe((data: Contact)=>{
            this.contact = data;
        });
    }
  
}