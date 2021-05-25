import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  login_form:any = {
    user: '',
    pass: ''
  }

  constructor(private __service: ApiService, private __tokenService: TokenService, private router: Router) { }

  login(){
    this.__service.session(this.login_form.user, this.login_form.pass).subscribe(res =>{
      console.log(res);
      this.__tokenService.setToken(res);
      if(res === 'invalid'){
        console.log('mensaje de error');
      }else{
        this.router.navigate(['/novia/maquillaje-peinado']);
      }
    });
  }

  ngOnInit(): void {

    if(this.__tokenService.getToken()){
      this.router.navigate(['/novia/maquillaje-peinado']);
    }

  }

}
