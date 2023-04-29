import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countKnowledge:any = []
  countServer:any = []
  countContact:any = []
  countRCA:any = []

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getAllCount();
  }

  private getAllCount() {
    this.dashboardService.getKnowledgeCount().subscribe(
      response => this.countKnowledge = response
    );

    this.dashboardService.getServerCount().subscribe(
      response => this.countServer = response
    );

    this.dashboardService.getContactCount().subscribe(
      response => this.countContact = response
    );

    this.dashboardService.getRCACount().subscribe(
      response => this.countRCA = response
    );

  }
}
