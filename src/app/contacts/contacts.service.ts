import { Injectable } from '@angular/core';
import { AppConstants } from '../shared/app.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor( private httpClient: HttpClient ) { }
  
  getAllContacts(): Observable<any> {
		return this.httpClient.get(AppConstants.CONTACT_ENDPOINT);
	}

  create(contact:any): Observable<any> {
    this.httpClient.get(AppConstants.CONTACT_ENDPOINT);
		return this.httpClient.post(AppConstants.CONTACT_ENDPOINT, JSON.stringify(contact), AppConstants.httpOptions)
	}

  find(id:number): Observable<any> {
		return this.httpClient.get<Contact>(AppConstants.CONTACT_ENDPOINT + '/' + id)
	}
     
	update(id:number, contact:Contact): Observable<any> {
		return this.httpClient.put(AppConstants.CONTACT_ENDPOINT + '/' + id, JSON.stringify(contact), AppConstants.httpOptions)
	}
     
	delete(id:number){
		return this.httpClient.delete(AppConstants.CONTACT_ENDPOINT + '/' + id)
	}
}
