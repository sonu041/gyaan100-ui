import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from './contacts.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contact } from './contact';


@Component({
    selector: 'app-delete-contact',
    templateUrl: './contact-delete.component.html',
    styleUrls: ['./contacts.component.css']
  })

export class ContactDeleteComponent implements OnInit{

  id: any;
  contacts:any = [];
  contact!: Contact;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactsService,
    private _snackBar: MatSnackBar,
    private contactsService: ContactsService,
  ) {  }

  ngOnInit() { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.contactsService.find(this.id).subscribe((data: Contact)=>{
      this.contact = data;
    });
    console.log(this.id);
  }
  
  confirmDelete() {
    var res = this.contactService.delete(this.id);
    res.subscribe(
      () => {
        this.openSnackBar('Contact deleted', 'close');
			  this.router.navigateByUrl('contacts');
      }
    );
  }

  /** Show Toast Message */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }

}