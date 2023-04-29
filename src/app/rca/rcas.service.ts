import { Injectable } from '@angular/core';
import { AppConstants } from '../shared/app.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rca } from './rca';

@Injectable({
  providedIn: 'root'
})
export class RcasService {

  constructor( private httpClient: HttpClient ) { }
  
  getAllRcas(): Observable<any> {
		return this.httpClient.get(AppConstants.RCA_ENDPOINT);
	}

  create(rca:any): Observable<any> {
    this.httpClient.get(AppConstants.RCA_ENDPOINT);
		return this.httpClient.post(AppConstants.RCA_ENDPOINT, JSON.stringify(rca), AppConstants.httpOptions)
	}

  find(id:number): Observable<any> {
		return this.httpClient.get<Rca>(AppConstants.RCA_ENDPOINT + '/' + id)
	}
     
	update(id:number, rca:Rca): Observable<any> {
		return this.httpClient.put(AppConstants.RCA_ENDPOINT + '/' + id, JSON.stringify(rca), AppConstants.httpOptions)
	}
     
	delete(id:number){
		return this.httpClient.delete(AppConstants.RCA_ENDPOINT + '/' + id)
	}
}
