import { Injectable } from '@angular/core';
import { AppConstants } from '../shared/app.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Template } from './template';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor( private httpClient: HttpClient ) { }
  
  getAllTemplates(): Observable<any> {
		return this.httpClient.get(AppConstants.TEMPLATE_ENDPOINT);
	}

  create(template:any): Observable<any> {
    this.httpClient.get(AppConstants.TEMPLATE_ENDPOINT);
		return this.httpClient.post(AppConstants.TEMPLATE_ENDPOINT, JSON.stringify(template), AppConstants.httpOptions)
	}

  find(id:number): Observable<any> {
		return this.httpClient.get<Template>(AppConstants.TEMPLATE_ENDPOINT + '/' + id)
	}
     
	update(id:number, template:Template): Observable<any> {
		return this.httpClient.put(AppConstants.TEMPLATE_ENDPOINT + '/' + id, JSON.stringify(template), AppConstants.httpOptions)
	}
     
	delete(id:number){
		return this.httpClient.delete(AppConstants.TEMPLATE_ENDPOINT + '/' + id)
	}
}
