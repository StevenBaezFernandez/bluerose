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
  show_option_panel = false;

  id_img_delete:string;
  url_img_delete:string;

  options_forms:any = {
    editar_nombre: true
  }
  tabs:any = {
    galeria: false,
    paquetes: true,
    proveedores: false
  }
  form_edit_prov:any = {
    nombre: '',
    correo: '',
    telefono: '',
    direccion: ''
  } 

  obtener_prov(prov:any){
    console.log(prov);
    this.form_edit_prov.nombre = `${prov.nombre_prov} ${prov.apellido_prov}`;
    this.form_edit_prov.correo = prov.correo_prov;
    this.form_edit_prov.telefono = prov.telefono_prov;
    this.form_edit_prov.direccion = prov.direccion_prov;
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
  
  
  ngOnInit(): void {
    // capturando los datos de la ruta
    this.rutaActiva.params.subscribe((params: Params)=>{
      this.url = params;  
      this.get_data();    
    });

  }

}
