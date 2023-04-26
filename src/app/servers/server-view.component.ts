import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ServersService } from './servers.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Server } from './server';


@Component({
    selector: 'app-server-view',
    templateUrl: './server-view.component.html',
    styleUrls: ['./servers.component.css']
  })

export class ServerViewComponent implements OnInit{

  id: any;
  server!: Server;

  constructor(
    private route: ActivatedRoute,
    private serverService: ServersService,
  ) { }

    ngOnInit() { 
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        this.serverService.find(this.id).subscribe((data: Server)=>{
            this.server = data;
        });
    }
  
}