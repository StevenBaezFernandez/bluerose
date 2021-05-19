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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    IdlessPipe,
    TitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
