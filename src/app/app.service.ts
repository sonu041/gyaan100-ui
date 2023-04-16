import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private httpClient: HttpClient) { }

  hello(): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.get("http://localhost:8080/api/knowledge",
      {headers, responseType:'text'});

    // const headers = new HttpHeaders().set('Authorization', 'Basic ZHZlZ2E6cGFzc3dvcmQ=');
    // return this.httpClient.get("http://localhost:8080/api/coffee",
    // {headers, responseType:'text'});
  }
}
