import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { RcasService } from './rcas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Rca } from './rca';


@Component({
    selector: 'app-delete-rca',
    templateUrl: './rca-delete.component.html',
    styleUrls: ['./rcas.component.css']
  })

export class RcaDeleteComponent implements OnInit{

  id: any;
  rcas:any = [];
  rca!: Rca;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private rcaService: RcasService,
    private _snackBar: MatSnackBar,
    private rcasService: RcasService,
  ) {  }

  ngOnInit() { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.rcasService.find(this.id).subscribe((data: Rca)=>{
      this.rca = data;
    });
    console.log(this.id);
  }
  
  confirmDelete() {
    var res = this.rcaService.delete(this.id);
    res.subscribe(
      () => {
        this.openSnackBar('Rca deleted', 'close');
			  this.router.navigateByUrl('rca');
      }
    );
  }

  /** Show Toast Message */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }

}