import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemplatesService } from './templates.service';
import { Template } from './template';


@Component({
    selector: 'app-templates-view',
    templateUrl: './template-view.component.html',
    styleUrls: ['./templates.component.css']
  })

export class TemplateViewComponent implements OnInit{

  id: any;
  template!: Template;

  constructor(
    private route: ActivatedRoute,
    private templatesService: TemplatesService,
  ) { }

    ngOnInit() { 
        this.id = this.route.snapshot.paramMap.get('id');
        this.templatesService.find(this.id).subscribe((data: Template)=>{
            this.template = data;
        });
    }
  
}