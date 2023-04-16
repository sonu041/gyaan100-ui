import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KnowledgesService {
  private static KNOWLEDGE_ENDPOINT = 'http://localhost:8080/api/knowledge';
  private static headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    

  constructor( private httpClient: HttpClient ) { }
  getKnowledges$(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.get(KnowledgesService.KNOWLEDGE_ENDPOINT,
      { headers, responseType:'text' });
  }
    
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
