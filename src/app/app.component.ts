import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';
import { authConfig } from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gyaan100-ui';
  text = '';

  constructor(private oauthService: OAuthService, private appService: AppService) {
    
    // this.appService.hello().subscribe(response => {
    //   this.text = response;
    // })
  }
  ngOnInit(): void {
    if(!this.oauthService.hasValidAccessToken()) {
      this.configure();
    }
  }
  

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }
}
