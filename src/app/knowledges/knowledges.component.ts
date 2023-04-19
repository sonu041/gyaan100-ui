import { Component, OnInit } from '@angular/core';
import { KnowledgesService } from './knowledges.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.css']
})
export class KnowledgesComponent implements OnInit{
  // knowledges: String[] = []
  knowledges:any = []

  constructor(private knowledgeService: KnowledgesService) {}

  ngOnInit(): void {
      this.getAllKnowledges();
  }

  private getAllKnowledges() {
    this.knowledgeService.getAllKnowledges().subscribe(
      response => this.knowledges = response
    );
  }

}
