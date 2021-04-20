import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AjuaresComponent } from './novia/ajuares/ajuares.component';
import { BouquetComponent } from './novia/bouquet/bouquet.component';
import { EstilosVestidoComponent } from './novia/estilos-vestido/estilos-vestido.component';
import { MaquillajePeinadoComponent } from './novia/maquillaje-peinado/maquillaje-peinado.component';

const routes: Routes = [
  {path:':cat1/:cat2', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
