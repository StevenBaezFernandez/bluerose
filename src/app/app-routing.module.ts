import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidaComponent } from './banquetes/bebida/bebida.component';
import { BuffetComponent } from './banquetes/buffet/buffet.component';
import { PostresDulcesComponent } from './banquetes/postres-dulces/postres-dulces.component';
import { PostresSaladosComponent } from './banquetes/postres-salados/postres-salados.component';
import { AltosComponent } from './flores/altos/altos.component';
import { BajitosComponent } from './flores/bajitos/bajitos.component';
import { LocacionesComponent } from './foto-video/locaciones/locaciones.component';
import { SesionesFotosComponent } from './foto-video/sesiones-fotos/sesiones-fotos.component';
import { AjuaresComponent } from './novia/ajuares/ajuares.component';
import { BouquetComponent } from './novia/bouquet/bouquet.component';
import { EstilosVestidoComponent } from './novia/estilos-vestido/estilos-vestido.component';
import { MaquillajePeinadoComponent } from './novia/maquillaje-peinado/maquillaje-peinado.component';
import { BoutonnerComponent } from './novio/boutonner/boutonner.component';
import { TrajeNovioComponent } from './novio/traje-novio/traje-novio.component';
import { ArticulosEventosComponent } from './recepcion/articulos-eventos/articulos-eventos.component';
import { CuberteriaManteleriaComponent } from './recepcion/cuberteria-manteleria/cuberteria-manteleria.component';
import { EstiloDecoracionesComponent } from './recepcion/estilo-decoraciones/estilo-decoraciones.component';
import { PlatosComponent } from './recepcion/platos/platos.component';
import { SalonesEventosComponent } from './recepcion/salones-eventos/salones-eventos.component';
import { SillasMesasComponent } from './recepcion/sillas-mesas/sillas-mesas.component';
import { EstilosComponent} from './flores/estilos/estilos.component';
import { OtrosComponent } from './flores/otros/otros.component';

const routes: Routes = [
  {
    path: 'novia', 
    children:[
      { path: 'maquillaje-peinados', component: MaquillajePeinadoComponent },
      { path: 'vestidos', component: EstilosVestidoComponent },
      { path: 'bouquet', component: BouquetComponent },
      { path: 'ajuares', component: AjuaresComponent }
    ]
  },
  {
    path: 'novio', 
    children:[
      { path: 'traje-novio', component: TrajeNovioComponent },
      { path: 'boutonnier', component: BoutonnerComponent },
      { path: 'ajuares', component: AjuaresComponent } //arreglar
    ]
  },
  {
    path: 'recepcion', 
    children:[
      { path: 'salones-eventos', component: SalonesEventosComponent },
      { path: 'estilos-decoraciones', component: EstiloDecoracionesComponent },
      { path: 'sillas-mesas', component: SillasMesasComponent },
      { path: 'articulos-eventos', component: ArticulosEventosComponent },
      { path: 'platos', component: PlatosComponent },
      { path: 'cuberteria-manteleria', component: CuberteriaManteleriaComponent }
    ]
  },
  {
    path: 'foto-video', 
    children:[
      { path: 'secciones', component: SesionesFotosComponent },
      { path: 'locaciones', component: LocacionesComponent }
    ]
  },
  {
    path: 'banquetes', 
    children:[
      { path: 'postres-dulces', component: PostresDulcesComponent },
      { path: 'postres-salados', component: PostresSaladosComponent },
      { path: 'buffet', component: BuffetComponent },
      { path: 'bebida', component: BebidaComponent }      

    ]
  },
  {
    path: 'flores', 
    children:[
      { path: 'altos', component: AltosComponent },
      { path: 'bajitos', component: BajitosComponent },
      { path: 'estilos', component: EstilosComponent },
      { path: 'otros', component: OtrosComponent }      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
