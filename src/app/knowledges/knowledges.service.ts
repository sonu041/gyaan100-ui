import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../shared/app.constant';
import { Knowledge } from './knowledge';

@Injectable({
  providedIn: 'root'
})
export class KnowledgesService {
  private static KNOWLEDGE_ENDPOINT = AppConstants.API_URL+'/knowledge';
  private static headers = AppConstants.httpOptions;
  // new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

  constructor( private httpClient: HttpClient ) { }

  
  getAllKnowledges(): Observable<any> {
		return this.httpClient.get(KnowledgesService.KNOWLEDGE_ENDPOINT);
	}

  create(knowledge:any): Observable<any> {
    // console.log('inside service create');
    this.httpClient.get(KnowledgesService.KNOWLEDGE_ENDPOINT);
		return this.httpClient.post(KnowledgesService.KNOWLEDGE_ENDPOINT, JSON.stringify(knowledge), AppConstants.httpOptions)
	}

  find(id:number): Observable<any> {
		return this.httpClient.get<Knowledge>(KnowledgesService.KNOWLEDGE_ENDPOINT + '/' + id)
	}
     
	update(id:number, knowledge:Knowledge): Observable<any> {
		return this.httpClient.put(KnowledgesService.KNOWLEDGE_ENDPOINT + '/' + id, JSON.stringify(knowledge), AppConstants.httpOptions)
	}
     
	delete(id:number){
		return this.httpClient.delete(KnowledgesService.KNOWLEDGE_ENDPOINT + '/' + id)
	}

  // getKnowledges$(): Observable<any> {
  //   // const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  //   return this.httpClient.get(KnowledgesService.KNOWLEDGE_ENDPOINT,
  //     { KnowledgesService.headers, responseType:'text' });
  // }

  // find(id:number): Observable<any> {
	// 	return this.httpClient.get<Product>(AppConstants.API_URL + 'products/' + id)
	// }
    
  // addTask$(task) : Observable<any> {
  //   return this.authHttp.post(TaskListService.TASKS_ENDPOINT,
  //     { description: task });
  // }
    
  // deleteTask$(task): Observable<any> {
  //   return this.authHttp.delete(TaskListService.TASKS_ENDPOINT +
  //     '?id=' + task._id);
  // }

  // hello(): Observable<string> {
  //   const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  //   return this.httpClient.get("http://localhost:8080/api/knowledge",
  //     {headers, responseType:'text'});

  //   // const headers = new HttpHeaders().set('Authorization', 'Basic ZHZlZ2E6cGFzc3dvcmQ=');
  //   // return this.httpClient.get("http://localhost:8080/api/coffee",
  //   // {headers, responseType:'text'});
  // }
}
