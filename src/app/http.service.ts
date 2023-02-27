import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string='http://localhost:8080/newcompany';

  constructor(private http: HttpClient) { }

  PostData(obj:any){
    return (this.http.post(this.url, obj, {responseType:'text'}));
  }

}
