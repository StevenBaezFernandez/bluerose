import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Servicio
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { IdlessPipe } from './idless.pipe';
import { TitlePipe } from './title.pipe';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    IdlessPipe,
    TitlePipe,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ApiService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
