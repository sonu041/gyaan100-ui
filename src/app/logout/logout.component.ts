import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent  implements OnInit{

  constructor(private oauthService: OAuthService) {

  }
  ngOnInit(): void {
    this.logout();
  }
  
  logout() {
    console.log('Inside navbar logout.');
    this.oauthService.logOut();
  }

}
