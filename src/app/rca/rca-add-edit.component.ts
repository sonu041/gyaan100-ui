import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { RcasService } from './rcas.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-rca-add-edit',
    templateUrl: './rca-add-edit.component.html',
    styleUrls: ['./rcas.component.css']
  })

export class RcaAddEditComponent implements OnInit{

  id: any;
  form: FormGroup;
  rcas:any = [];
  // durationInSeconds = 5;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private rcaService: RcasService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      title: ['', [ Validators.required ] ],
      details: ['', [ ] ],
      root_cause: ['', [ ] ],
      timeline: ['', [ ] ],
      action_item: ['', [ ] ],
    })
  }
  ngOnInit() { 
    this.id = this.route.snapshot.paramMap.get('id');
		console.log(this.id);
		if(this.id){
			this.rcaService.find(this.id).subscribe(x => this.form.patchValue(x));
		}
  }
  
  /** Submit the Knowledge Create Form */
  submitForm() {
    console.log('inside submit form');
    var res = this.id 
      ? this.rcaService.update(this.id, this.form.value) 
      : this.rcaService.create(this.form.value);
		
    res.subscribe(
      () => {
        this.openSnackBar('Rca Saved', 'close');
			  this.router.navigateByUrl('rca');
      }
    );
  }

  /** Show Toast Message */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000}) ;
  }

}