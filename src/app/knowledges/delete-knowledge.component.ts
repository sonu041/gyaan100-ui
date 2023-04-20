import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { KnowledgesService } from './knowledges.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-delete-knowledge',
    templateUrl: './delete-knowledge.component.html',
    styleUrls: ['./knowledges.component.css']
  })

export class DeleteKnowledgeComponent implements OnInit{

  id: any;
  form: FormGroup;
  knowledges:any = [];
  // durationInSeconds = 5;

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
        Validators.maxLength(100),
      ] ],
      description: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(4000),
      ] ]
    })
  }
  ngOnInit() { 
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  
  /** Submit the Knowledge Create Form */
  confirmDelete() {
    console.log('inside delete form');

    var res = this.knowledgeService.delete(this.id);
    res.subscribe(
      () => {
        console.log('Knowledge deleted successfully!');
        this.openSnackBar('Knowledge deleted', 'close');
			  this.router.navigateByUrl('knowledges');
      }
    );
  }

  /** Show Toast Message */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}