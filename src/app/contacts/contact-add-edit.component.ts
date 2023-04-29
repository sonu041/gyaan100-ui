import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from './contacts.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-contact-add-edit',
    templateUrl: './contact-add-edit.component.html',
    styleUrls: ['./contacts.component.css']
  })

export class ContactAddEditComponent implements OnInit{

  id: any;
  form: FormGroup;
  contacts:any = [];
  // durationInSeconds = 5;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactsService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      name: ['', [ Validators.required ] ],
      email: ['', [ Validators.required ] ],
      phone: ['', [ ] ],
      team: ['', [ ] ],
    })
  }
  ngOnInit() { 
    this.id = this.route.snapshot.paramMap.get('id');
		console.log(this.id);
		if(this.id){
			this.contactService.find(this.id).subscribe(x => this.form.patchValue(x));
		}
  }
  
  /** Submit the Knowledge Create Form */
  submitForm() {
    console.log('inside submit form');
    var res = this.id 
      ? this.contactService.update(this.id, this.form.value) 
      : this.contactService.create(this.form.value);
		
    res.subscribe(
      () => {
        this.openSnackBar('Contact Saved', 'close');
			  this.router.navigateByUrl('contacts');
      }
    );
  }

  /** Show Toast Message */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000}) ;
  }

}