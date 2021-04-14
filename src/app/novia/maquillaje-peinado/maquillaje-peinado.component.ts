import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maquillaje-peinado',
  templateUrl: './maquillaje-peinado.component.html',
  styleUrls: ['../../style/style-component.sass','./maquillaje-peinado.component.sass']
})
export class MaquillajePeinadoComponent implements OnInit {

  options_forms:any = {
    editar_nombre: true
  }
  toggle_form(){
  }
  tabs:any = {
    galeria: false,
    paquetes: true,
    proveedores: false
  }

  toggle_tabs(){
    this.tabs.galeria = false;
    this.tabs.paquetes = false;
    this.tabs.proveedores = false;
  }
  toggle_menu(event:any){
    console.log(event.target.dataset.menu);
    let menu = document.querySelector(`.${ event.target.dataset.menu }`);
    menu.classList.toggle(`paquete__menu-active`);
    

  }


  constructor() { }

  ngOnInit(): void {
  }

}
