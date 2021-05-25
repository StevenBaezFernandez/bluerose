import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token:any = 'invalid';

  setToken(token){
    localStorage.setItem("token", token);
  }
  getToken(){
    return localStorage.getItem("token");
  }



  constructor(private http: HttpClient) { }
}
