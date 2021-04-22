import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  optener(cat1:string, cat2:string, cat3:string = 'galeria'): Observable<any>{
    return this.http.get(`http://localhost/bluerose_api/api.php?cat1=${cat1}&cat2=${cat2}&cat3=${cat3}`);
  }
}