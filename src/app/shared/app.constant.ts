import { HttpHeaders } from '@angular/common/http';

export class AppConstants {
    public static API_URL = 'http://localhost:8080/api';
	public static httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
}