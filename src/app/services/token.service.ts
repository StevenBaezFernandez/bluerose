import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token:any = 'invalid';

  constructor() { }
}
