import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RcasService } from './rcas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Rca } from './rca';


@Component({
    selector: 'app-rcas-view',
    templateUrl: './rca-view.component.html',
    styleUrls: ['./rcas.component.css']
  })

export class RcaViewComponent implements OnInit{

  id: any;
  rca!: Rca;

  constructor(
    private route: ActivatedRoute,
    private rcasService: RcasService,
  ) { }

    ngOnInit() { 
        this.id = this.route.snapshot.paramMap.get('id');
        this.rcasService.find(this.id).subscribe((data: Rca)=>{
            this.rca = data;
        });
    }
  
}