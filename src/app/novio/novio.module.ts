import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrajeNovioComponent } from './traje-novio/traje-novio.component';
import { BoutonnerComponent } from './boutonner/boutonner.component';
import { AjuaresComponent } from './ajuares/ajuares.component';



@NgModule({
  declarations: [
    TrajeNovioComponent, 
    BoutonnerComponent, 
    AjuaresComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    TrajeNovioComponent, 
    BoutonnerComponent, 
    AjuaresComponent
  ]
})
export class NovioModule { }
