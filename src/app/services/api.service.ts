import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(cat1:string, cat2:string, cat3:string = 'galeria'): Observable<any>{    
    return this.http.get(`http://localhost/bluerose_api/api.php?cat1=${cat1}&cat2=${cat2}&cat3=${cat3}`);    
  }
  post(cat1:string, cat2:string, cat3:string = 'galeria', data:any){
    return this.http.post(`http://localhost/bluerose_api/api.php?cat1=${cat1}&cat2=${cat2}&cat3=${cat3}`, data);
  }
  put(cat1:string, cat2:string, cat3:string = 'galeria', id:number, data:any){
    return this.http.put(`localhost/bluerose_api/api.php?cat1=${cat1}&cat2=${cat2}&cat3=${cat3}&${id}`, data);
  }
  delete(cat1:string, cat2:string, cat3:string = 'galeria', id:number){
    return this.http.delete(`localhost/bluerose_api/api.php?cat1=${cat1}&cat2=${cat2}&cat3=${cat3}&${id}`);
  }
}