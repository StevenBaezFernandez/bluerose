import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonesEventosComponent } from './salones-eventos/salones-eventos.component';
import { EstiloDecoracionesComponent } from './estilo-decoraciones/estilo-decoraciones.component';
import { SillasMesasComponent } from './sillas-mesas/sillas-mesas.component';
import { ArticulosEventosComponent } from './articulos-eventos/articulos-eventos.component';
import { PlatosComponent } from './platos/platos.component';
import { CuberteriaManteleriaComponent } from './cuberteria-manteleria/cuberteria-manteleria.component';



@NgModule({
  declarations: [
    SalonesEventosComponent, 
    EstiloDecoracionesComponent, 
    SillasMesasComponent, 
    ArticulosEventosComponent, 
    PlatosComponent, 
    CuberteriaManteleriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SalonesEventosComponent, 
    EstiloDecoracionesComponent, 
    SillasMesasComponent, 
    ArticulosEventosComponent, 
    PlatosComponent, 
    CuberteriaManteleriaComponent
  ]
})
export class RecepcionModule { }
