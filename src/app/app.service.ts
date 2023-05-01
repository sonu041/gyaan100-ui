import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private httpClient: HttpClient, private oauthService: OAuthService) { }

  hello(): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.get("http://localhost:8080/api/knowledge",
      {headers, responseType:'text'});

  }

  logout() {
    console.log('logout initiated from app service...')
    this.oauthService.logOut();
  }
}
