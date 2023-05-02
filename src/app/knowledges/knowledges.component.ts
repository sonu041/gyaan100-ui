import { Component, OnInit } from '@angular/core';
import { KnowledgesService } from './knowledges.service';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.css']
})
export class KnowledgesComponent implements OnInit{
  // knowledges: String[] = []
  knowledges:any = []
  searchText: any;

  constructor(
    private route: ActivatedRoute,
    private knowledgeService: KnowledgesService
  ) {}

  ngOnInit(): void {
      this.getAllKnowledges();
  }

  private getAllKnowledges() {
    this.knowledgeService.getAllKnowledges().subscribe(
      response => this.knowledges = response
    );
  }

  search() {
    // this.searchtext = this.route.snapshot.paramMap.get('searchtext');
    console.log(this.searchText);
    this.knowledgeService.searchKnowledge(this.searchText).subscribe(
      response => this.knowledges = response
    );
  }

}
