import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaquillajePeinadoComponent } from './maquillaje-peinado/maquillaje-peinado.component';
import { EstilosVestidoComponent } from './estilos-vestido/estilos-vestido.component';
import { BouquetComponent } from './bouquet/bouquet.component';
import { AjuaresComponent } from './ajuares/ajuares.component';



@NgModule({
  declarations: [
    MaquillajePeinadoComponent,
    EstilosVestidoComponent,
    BouquetComponent,
    AjuaresComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MaquillajePeinadoComponent,
    EstilosVestidoComponent,
    BouquetComponent,
    AjuaresComponent
  ]
})
export class NoviaModule { }
