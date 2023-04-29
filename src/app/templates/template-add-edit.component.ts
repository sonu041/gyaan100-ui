import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { TemplatesService } from './templates.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-template-add-edit',
    templateUrl: './template-add-edit.component.html',
    styleUrls: ['./templates.component.css']
  })

export class TemplateAddEditComponent implements OnInit{

  id: any;
  form: FormGroup;
  templates:any = [];
  // durationInSeconds = 5;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private templateService: TemplatesService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      title: ['', [ Validators.required ] ],
      description: ['', [ ] ],
      content: ['', [ ] ],
    })
  }
  ngOnInit() { 
    this.id = this.route.snapshot.paramMap.get('id');
		console.log(this.id);
		if(this.id){
			this.templateService.find(this.id).subscribe(x => this.form.patchValue(x));
		}
  }
  
  /** Submit the Knowledge Create Form */
  submitForm() {
    console.log('inside submit form');
    var res = this.id 
      ? this.templateService.update(this.id, this.form.value) 
      : this.templateService.create(this.form.value);
		
    res.subscribe(
      () => {
        this.openSnackBar('Template Saved', 'close');
			  this.router.navigateByUrl('templates');
      }
    );
  }

  /** Show Toast Message */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000}) ;
  }

}