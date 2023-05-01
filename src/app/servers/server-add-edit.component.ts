import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ServersService } from './servers.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-server-add-edit',
    templateUrl: './server-add-edit.component.html',
    styleUrls: ['./servers.component.css']
  })

export class ServerAddEditComponent implements OnInit{

  id: any;
  form: FormGroup;
  servers:any = [];
  // durationInSeconds = 5;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private serverService: ServersService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      name: ['', [ Validators.required ] ],
      hostname: ['', [ Validators.required ] ],
      ip: ['', [ ] ],
      type: ['', [ ] ],
      os: ['', [ ] ],
    })
  }
  ngOnInit() { 
    this.id = this.route.snapshot.paramMap.get('id');
		console.log(this.id);
		if(this.id){
			this.serverService.find(this.id).subscribe(x => this.form.patchValue(x));
		}
  }
  
  /** Submit the Knowledge Create Form */
  submitForm() {
    console.log('inside submit form');
    var res = this.id 
      ? this.serverService.update(this.id, this.form.value) 
      : this.serverService.create(this.form.value);
		
    res.subscribe(
      () => {
        this.openSnackBar('Server Saved', 'close');
			  this.router.navigateByUrl('servers');
      }
    );
  }

  /** Show Toast Message */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000}) ;
  }

}