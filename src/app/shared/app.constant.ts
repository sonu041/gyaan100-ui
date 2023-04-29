import { HttpHeaders } from '@angular/common/http';

export class AppConstants {
    private static API_URL = 'http://localhost:8080/api';
	public static KNOWLEDGE_ENDPOINT = AppConstants.API_URL+'/knowledge';
	public static SERVER_ENDPOINT = AppConstants.API_URL+'/server';
	public static CONTACT_ENDPOINT = AppConstants.API_URL+'/contact';
	public static TEMPLATE_ENDPOINT = AppConstants.API_URL+'/template';
	public static RCA_ENDPOINT = AppConstants.API_URL+'/rca';
	public static httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
}