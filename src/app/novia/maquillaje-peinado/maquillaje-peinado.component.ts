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
  show_option_panel = false;
  tabs:any = {
    galeria: false,
    paquetes: true,
    proveedores: false
  }
  toggle_option_panel(event:any){
    if(event.target.dataset.option == 'agregar-elementos' || event.target.dataset.option == 'editar-elementos'){
      this.show_option_panel = true;
    }else{
      this.show_option_panel = !this.show_option_panel;
    }
    const forms = document.querySelectorAll(".option-panel__form");
    forms.forEach((form)=>{
      form.classList.remove('option-panel__form-active');
    });
    document.getElementById(event.target.dataset.option).classList.add('option-panel__form-active');
  }
  
  toggle_tabs(){
    this.tabs.galeria = false;
    this.tabs.paquetes = false;
    this.tabs.proveedores = false;
  }
  toggle_menu(event:any){
    console.log(event);
    let menu = document.querySelector(`.${ event.target.dataset.menu }`);
    if(event.type == 'blur'){
      setTimeout(()=>{
        menu.classList.toggle(`paquete__menu-active`);
      },200)
    }else{
      menu.classList.toggle(`paquete__menu-active`);
    }
    

  }


  constructor() { }

  ngOnInit(): void {
  }

}
