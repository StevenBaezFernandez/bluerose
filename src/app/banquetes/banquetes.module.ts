import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostresDulcesComponent } from './postres-dulces/postres-dulces.component';
import { PostresSaladosComponent } from './postres-salados/postres-salados.component';
import { BuffetComponent } from './buffet/buffet.component';
import { BebidaComponent } from './bebida/bebida.component';



@NgModule({
  declarations: [
    PostresDulcesComponent, 
    PostresSaladosComponent, 
    BuffetComponent, 
    BebidaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PostresDulcesComponent, 
    PostresSaladosComponent, 
    BuffetComponent, 
    BebidaComponent
  ]
})
export class BanquetesModule { }
