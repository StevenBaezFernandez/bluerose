import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjuaresComponent } from './novia/ajuares/ajuares.component';
import { BouquetComponent } from './novia/bouquet/bouquet.component';
import { EstilosVestidoComponent } from './novia/estilos-vestido/estilos-vestido.component';
import { MaquillajePeinadoComponent } from './novia/maquillaje-peinado/maquillaje-peinado.component';

const routes: Routes = [
  {
    path: 'novia', 
    children:[
      { path: 'maquillaje-peinados', component: MaquillajePeinadoComponent },
      { path: 'vestidos', component: EstilosVestidoComponent },
      { path: 'bouquet', component: BouquetComponent },
      { path: 'ajuares', component: AjuaresComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
