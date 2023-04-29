import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TemplatesService } from './templates.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Template } from './template';


@Component({
    selector: 'app-delete-template',
    templateUrl: './template-delete.component.html',
    styleUrls: ['./templates.component.css']
  })

export class TemplateDeleteComponent implements OnInit{

  id: any;
  templates:any = [];
  template!: Template;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private templateService: TemplatesService,
    private _snackBar: MatSnackBar,
    private templatesService: TemplatesService,
  ) {  }

  ngOnInit() { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.templatesService.find(this.id).subscribe((data: Template)=>{
      this.template = data;
    });
    console.log(this.id);
  }
  
  confirmDelete() {
    var res = this.templateService.delete(this.id);
    res.subscribe(
      () => {
        this.openSnackBar('Template deleted', 'close');
			  this.router.navigateByUrl('templates');
      }
    );
  }

  /** Show Toast Message */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }

}