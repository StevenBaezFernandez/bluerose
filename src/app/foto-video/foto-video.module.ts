import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SesionesFotosComponent } from './sesiones-fotos/sesiones-fotos.component';
import { LocacionesComponent } from './locaciones/locaciones.component';



@NgModule({
  declarations: [
    SesionesFotosComponent, 
    LocacionesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SesionesFotosComponent, 
    LocacionesComponent
  ]
})
export class FotoVideoModule { }
