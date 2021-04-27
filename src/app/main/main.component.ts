import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  data_api:any;
  url:any;
  cat2:string;
  edit_prov_form = {
    nombre_prov: '',
    correo_prov: '',
    telefono_prov: '',
    direccion_prov: ''
  }
  add_prov_form = {
    nombre_prov: '',
    correo_prov: '',
    telefono_prov: '',
    direccion_prov: ''
  }

  id_img_delete:string;
  url_img_delete:string;

  options_forms:any = {
    editar_nombre: true
  }
  show_option_panel = false;
  tabs:any = {
    galeria: false,
    paquetes: true,
    proveedores: false
  }
  add_edit(data:any){
    this.edit_prov_form.nombre_prov = data.nombre;
    this.edit_prov_form.correo_prov = data.correo;
    this.edit_prov_form.telefono_prov = data.telefono;
    this.edit_prov_form.direccion_prov = data.direccion;
  }

  toggle_option_panel(){
    this.show_option_panel = !this.show_option_panel;   
  }
  toggle_forms(event:any){
    const forms = document.querySelectorAll(".option-panel__form");
    forms.forEach((form)=>{
      form.classList.remove('option-panel__form-active');
    });
    document.getElementById(`${event.target.dataset.option}`).classList.add('option-panel__form-active');
  }
  
  toggle_tabs(){
    this.tabs.galeria = false;
    this.tabs.paquetes = false;
    this.tabs.proveedores = false;
  }
  toggle_menu(event:any){
    console.log(event.target.dataset);
    this.id_img_delete = event.target.dataset.imgId;
    this.url_img_delete = event.target.dataset.imgUrl;
    let menu = document.querySelector(`.${ event.target.dataset.menu }`);
    if(event.type == 'blur'){
      setTimeout(()=>{
        menu.classList.toggle(`paquete__menu-active`);
      },200)
    }else{
      menu.classList.toggle(`paquete__menu-active`);
    }
    

  }
  
  constructor(private rutaActiva: ActivatedRoute, private _service: ApiService) { }

  // ------Crud methods------
  get_data(){
    let cat3 = '';
      if(this.tabs.galeria){
        cat3 = 'galeria';
      }else if(this.tabs.paquetes){
        cat3 = 'items-paquetes';
      }else if(this.tabs.proveedores){
        cat3 = 'proveedores';
      }
      const { cat1, cat2} = this.url;
      this._service.get(cat1, cat2, cat3).subscribe(data=>{
        this.data_api = data;
        console.log(data);
      });
  }
  edit_data(){

  }
  
  ngOnInit(): void {
    // capturando los datos de la ruta
    this.rutaActiva.params.subscribe((params: Params)=>{
      this.url = params;  
      this.get_data();    
    });

  }

}
