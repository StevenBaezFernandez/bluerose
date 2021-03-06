import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  header = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  session(user:any = false, pass:any = false){
    return this.http.get(`http://localhost/bluerose_api/api.php?session=true&user=${user}&pass=${pass}`);
  }  
  close_session(){
    return this.http.get(`http://localhost/bluerose_api/api.php?session=destroy`);
  }

  get(cat1:string, cat2:string, cat3:string = 'galeria', paquete:any = false): Observable<any>{    
    return this.http.get(`http://localhost/bluerose_api/api.php?cat1=${cat1}&cat2=${cat2}&cat3=${cat3}&paquete=${paquete}`);    
  }
  post(cat1:string, cat2:string, cat3:string = 'galeria', paquete:any = false, data:any){
    return this.http.post(`http://localhost/bluerose_api/api.php?cat1=${cat1}&cat2=${cat2}&cat3=${cat3}&paquete=${paquete}`, data, {headers: this.header, responseType:"text"});
  }
  put(cat1:string, cat2:string, cat3:string = 'galeria', id:number, data:any){
    return this.http.put(`http://localhost/bluerose_api/api.php?cat1=${cat1}&cat2=${cat2}&cat3=${cat3}&id=${id}`, data, {headers: this.header, responseType:"text"});
  }
  delete(cat1:string, cat2:string, cat3:string = 'galeria', id:any, items:any = false){
    return this.http.delete(`http://localhost/bluerose_api/api.php?cat1=${cat1}&cat2=${cat2}&cat3=${cat3}&id=${id}&items=${items}`, {headers: this.header, responseType:"text"});
  }
}