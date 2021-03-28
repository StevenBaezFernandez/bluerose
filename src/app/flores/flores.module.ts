import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltosComponent } from './altos/altos.component';
import { BajitosComponent } from './bajitos/bajitos.component';
import { EstilosComponent } from './estilos/estilos.component';
import { OtrosComponent } from './otros/otros.component';



@NgModule({
  declarations: [
    AltosComponent, 
    BajitosComponent, 
    EstilosComponent, 
    OtrosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AltosComponent, 
    BajitosComponent, 
    EstilosComponent, 
    OtrosComponent
  ]
})
export class FloresModule { }
