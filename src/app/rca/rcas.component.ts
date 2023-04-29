import { Component, OnInit } from '@angular/core';
import { RcasService } from './rcas.service';

@Component({
  selector: 'app-rcas',
  templateUrl: './rcas.component.html',
  styleUrls: ['./rcas.component.css']
})
export class RcasComponent implements OnInit {

  rcas:any = []

  constructor(private rcaService: RcasService) {}

  ngOnInit(): void {
      this.getAllRcas();
  }

  private getAllRcas() {
    this.rcaService.getAllRcas().subscribe(
      response => this.rcas = response
    );
  }
}
