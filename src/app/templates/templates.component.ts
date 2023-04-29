import { Component, OnInit } from '@angular/core';
import { TemplatesService } from './templates.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  templates:any = []

  constructor(private templateService: TemplatesService) {}

  ngOnInit(): void {
      this.getAllTemplates();
  }

  private getAllTemplates() {
    this.templateService.getAllTemplates().subscribe(
      response => this.templates = response
    );
  }
}
