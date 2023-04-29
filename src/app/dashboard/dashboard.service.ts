import { Injectable } from '@angular/core';
import { AppConstants } from '../shared/app.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  	constructor( private httpClient: HttpClient ) { }
  
	getKnowledgeCount(): Observable<any> {
		return this.httpClient.get(AppConstants.KNOWLEDGE_ENDPOINT+ '/count');
	}

	getServerCount(): Observable<any> {
		return this.httpClient.get(AppConstants.SERVER_ENDPOINT+ '/count');
	}

	getContactCount(): Observable<any> {
		return this.httpClient.get(AppConstants.CONTACT_ENDPOINT+ '/count');
	}

	getRCACount(): Observable<any> {
		return this.httpClient.get(AppConstants.RCA_ENDPOINT+ '/count');
	}

	getTopKnowledges(): Observable<any> {
		return this.httpClient.get(AppConstants.KNOWLEDGE_ENDPOINT);
	}

	getTopRCAs(): Observable<any> {
		return this.httpClient.get(AppConstants.RCA_ENDPOINT);
	}
}
