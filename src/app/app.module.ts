import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvitacionesSuvenilesComponent } from './invitaciones-suveniles/invitaciones-suveniles.component';
import { SonidoMusicaAmbientacionesComponent } from './sonido-musica-ambientaciones/sonido-musica-ambientaciones.component';
import { CentroMesasComponent } from './centro-mesas/centro-mesas.component';
import { CeremoniaComponent } from './ceremonia/ceremonia.component';
import { CumpleanosComponent } from './cumpleanos/cumpleanos.component';
import { BabyShowerComponent } from './baby-shower/baby-shower.component';
import { AniversarioComponent } from './aniversario/aniversario.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InvitacionesSuvenilesComponent,
    SonidoMusicaAmbientacionesComponent,
    CentroMesasComponent,
    CeremoniaComponent,
    CumpleanosComponent,
    BabyShowerComponent,
    AniversarioComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
