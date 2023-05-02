import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { KnowledgesService } from './knowledges.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Knowledge } from './knowledge';


@Component({
    selector: 'app-knowledge-view',
    templateUrl: './knowledge-view.component.html',
    styleUrls: ['./knowledges.component.css']
  })

export class KnowledgeViewComponent implements OnInit{

  id: any;
  knowledge!: Knowledge;

  constructor(
    private route: ActivatedRoute,
    private knowledgeService: KnowledgesService,
  ) { }

  ngOnInit() { 
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      this.knowledgeService.find(this.id).subscribe((data: Knowledge)=>{
          this.knowledge = data;
      });
  }
  
}