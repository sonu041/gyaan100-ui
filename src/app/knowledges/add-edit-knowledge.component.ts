import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { KnowledgesService } from './knowledges.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-add-edit-knowledge',
    templateUrl: './add-edit-knowledge.component.html',
    styleUrls: ['./knowledges.component.css']
  })

export class AddEditKnowledgeComponent implements OnInit{

  id: any;
  form: FormGroup;
  knowledges:any = [];
  durationInSeconds = 5;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private knowledgeService: KnowledgesService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ] ],
      description: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ] ]
    })
  }
  ngOnInit() { 
    this.id = this.route.snapshot.paramMap.get('id');
		console.log(this.id);
		if(this.id){
			// this.productService.find(this.id).subscribe(x => this.form.patchValue(x));
		}
  }
  
  /** Submit the Knowledge Create Form */
  submitForm() {
    console.log('inside submit form');
    this.knowledgeService.create(this.form.value).subscribe(
      response => {
        console.log('Knowledge created / updated successfully!');
        this.openSnackBar('Knowledge created', 'close');
			  this.router.navigateByUrl('knowledges');
      }
    );
  }

  /** Show Toast Message */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}