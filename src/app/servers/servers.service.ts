import { Injectable } from '@angular/core';
import { AppConstants } from '../shared/app.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Server } from './server';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor( private httpClient: HttpClient ) { }
  
  getAllServers(): Observable<any> {
		return this.httpClient.get(AppConstants.SERVER_ENDPOINT);
	}

  create(server:any): Observable<any> {
    // console.log('inside service create');
    this.httpClient.get(AppConstants.SERVER_ENDPOINT);
		return this.httpClient.post(AppConstants.SERVER_ENDPOINT, JSON.stringify(server), AppConstants.httpOptions)
	}

  find(id:number): Observable<any> {
		return this.httpClient.get<Server>(AppConstants.SERVER_ENDPOINT + '/' + id)
	}
     
	update(id:number, server:Server): Observable<any> {
		return this.httpClient.put(AppConstants.SERVER_ENDPOINT + '/' + id, JSON.stringify(server), AppConstants.httpOptions)
	}
     
	delete(id:number){
		return this.httpClient.delete(AppConstants.SERVER_ENDPOINT + '/' + id)
	}
}
