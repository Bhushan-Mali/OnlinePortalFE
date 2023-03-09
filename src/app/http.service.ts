import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string='http://localhost:8080/newcompany';
  urls:string='http://localhost:8080/candidate';

  constructor(private http: HttpClient) { }

  PostData(obj:any){
    return (this.http.post(this.url, obj, {responseType:'text'}));
  }

  PostInfo(obj:any){
    return (this.http.post(this.urls, obj, {responseType:'text'}));
  }

}
