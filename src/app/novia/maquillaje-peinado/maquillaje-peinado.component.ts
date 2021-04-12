import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maquillaje-peinado',
  templateUrl: './maquillaje-peinado.component.html',
  styleUrls: ['../../style/style-component.sass','./maquillaje-peinado.component.sass']
})
export class MaquillajePeinadoComponent implements OnInit {

  tabs:any = {
    galeria: true,
    paquetes: false,
    proveedores: false
  }

  toggle_tabs(){
    this.tabs.galeria = false;
    this.tabs.paquetes = false;
    this.tabs.proveedores = false;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
