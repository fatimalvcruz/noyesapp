import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class YesnoapiService {

  url:string = 'https://yesno.wtf/api'

  constructor(private http: HttpClient) { }

  getgift():Observable<any>{
    return this.http.get(this.url);

  }
}


/**
 * 
 * 
  {
  "answer": "yes",
  "forced": false,
  "image": "https://yesno.wtf/assets/yes/2.gif"
}
 */