import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { KnowledgesService } from './knowledges.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
    selector: 'app-knowledge-add-edit',
    templateUrl: './knowledge-add-edit.component.html',
    styleUrls: ['./knowledges.component.css']
  })

export class KnowledgeAddEditComponent implements OnInit{

  id: any;
  form: FormGroup;
  knowledges:any = [];
  currentUser: any;
  // durationInSeconds = 5;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private knowledgeService: KnowledgesService,
    private _snackBar: MatSnackBar,
  ) {
    this.form = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ] ],
      description: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(4000),
      ] ],
      author: [this.currentUser]
    })
  }
  ngOnInit() { 
    this.currentUser = localStorage.getItem('userName');
    console.log('In Add Knowledge' + this.currentUser);
    this.id = this.route.snapshot.paramMap.get('id');
		console.log(this.id);
		if(this.id){
			this.knowledgeService.find(this.id).subscribe(x => this.form.patchValue(x));
		}
  }
  
  /** Submit the Knowledge Create Form */
  submitForm() {
    console.log('inside submit form');
    var res = this.id 
      ? this.knowledgeService.update(this.id, this.form.value) 
      : this.knowledgeService.create(this.form.value);
		
    res.subscribe(
      () => {
        console.log('Knowledge created / updated successfully!');
        this.openSnackBar('Knowledge Saved', 'close');
			  this.router.navigateByUrl('knowledges');
      }
    );
  }

  /** Show Toast Message */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000}) ;
  }

}