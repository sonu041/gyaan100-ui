import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';
import { authConfig } from './auth.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gyaan100-ui';
  text = '';

  constructor(
    private oauthService: OAuthService, 
    private appService: AppService, 
    private router: Router) {
  }
  ngOnInit(): void {
    if(this.getUserName() != null) {
      localStorage.setItem('userName', this.getUserName());
    }
    if(!this.oauthService.hasValidAccessToken()) {
      this.configure();
    } else {
      this.router.navigateByUrl('dashboard');
    }
    // console.log(this.getUserName());
    
  }  

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();
    console.log('inside configure');
    // localStorage.setItem('userName', this.getUserName());
  }

  login() {
    this.oauthService.initCodeFlow();
    console.log('Login Success...');
  }

  logout() {
    console.log('logout initiated...')
    this.oauthService.logOut();
  }

  public getUserName() {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['name']
  }
}
