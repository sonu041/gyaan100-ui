import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers:any = []

  constructor(private serverService: ServersService) {}

  ngOnInit(): void {
      this.getAllServers();
  }

  private getAllServers() {
    this.serverService.getAllServers().subscribe(
      response => this.servers = response
    );
  }
}
