import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ServersService } from './servers.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-delete-server',
    templateUrl: './delete-server.component.html',
    styleUrls: ['./servers.component.css']
  })

export class DeleteServerComponent implements OnInit{

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
    var res = this.serverService.delete(this.id);
    res.subscribe(
      () => {
        this.openSnackBar('Server deleted', 'close');
			  this.router.navigateByUrl('servers');
      }
    );
  }

  /** Show Toast Message */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }

}