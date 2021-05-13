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
  id_edit_item:number;

  id_item_paq_delete = {
    id: null,
    item: ''
  }

  options_forms:any = {
    editar_nombre: true
  }
  tabs:any = {
    galeria: false,
    paquetes: true,
    proveedores: false,
    items_paq: false
  }
  form_add_prov:any = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    direccion: ''
  } 

  form_edit_prov:any = {
    id: null,
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    direccion: ''
  }
  form_add_item_paq:any = {
    item: ''
  };
  id_delete:any;

  items_paq:any[] = [];

  paquete:any;

  form_edit_item_paq:any = {
    id: null,
    paq: null,
    item: ''
  }; 
  items_to_delete:any[] = [];

  get_items_to_delete(event:any, item:number){
    const target = event.target;
    if(target.checked ){
      this.items_to_delete.push(item);
    }else{
      this.items_to_delete = this.items_to_delete.filter((i)=>{
        return i != item;
      });
    }
    console.log(this.items_to_delete);
  }
  get_item_to_delete(item_id:number, item_nombre:string){
    this.id_item_paq_delete.id = item_id;
    this.id_item_paq_delete.item = item_nombre;
  }
  get_item_to_edit(item_id:number, item_nombre:string){
    this.form_edit_item_paq.id = item_id;
    this.form_edit_item_paq.paq = this.paquete;
    this.form_edit_item_paq.item = item_nombre;
  }
  get_cat3(){
    if(this.tabs.galeria){
      return 'galeria';
    }
    else if(this.tabs.proveedores){
      return 'proveedores';
    }
    else if(this.tabs.paquetes){
      return 'paquetes';
    }
    else if(this.tabs.items_paq){
      return 'items-paquetes';
    }
  }
  get_data_to_send(){
    if(this.tabs.galeria){
      return 'galeria';
    }
    else if(this.tabs.proveedores){
      return this.form_add_prov;
    }
    else if(this.tabs.paquetes){
      return this.form_add_item_paq;
    }
    else if(this.tabs.items_paq){
      return this.form_add_item_paq;
    }
  }

  obtener_prov(e:any, data:any){
    const form_name:string =  e.target.dataset.option;
    switch(form_name){
      case 'editar-proveedor':
        this.form_edit_prov.id = data.id_prov;
        this.form_edit_prov.nombre = data.nombre_prov;
        this.form_edit_prov.apellido = data.apellido_prov;
        this.form_edit_prov.correo = data.correo_prov;
        this.form_edit_prov.telefono = data.telefono_prov;
        this.form_edit_prov.direccion = data.direccion_prov;
      break;
    } 
  }
  get_id_delete(id:any){
    this.id_delete = id;
  }

  toggle_option_panel(){
    this.show_option_panel = !this.show_option_panel;   
  }
  toggle_forms(event:any){
    console.log(event);
    const forms = document.querySelectorAll(".option-panel__form");
    forms.forEach((form)=>{
      form.classList.remove('option-panel__form-active');
    });
    document.getElementById(`${event}`).classList.add('option-panel__form-active');
  }
  
  toggle_tabs(){
    this.tabs.galeria = false;
    this.tabs.paquetes = false;
    this.tabs.proveedores = false;
    this.tabs.items_paq = false;
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

  // get_items_paq(items:any){
  //   this.items_paq.length = 0;
  //   items.forEach(item => {
  //     this.items_paq.push(item.split('//'));
  //   });
  //   console.log(this.items_paq);
  // }
  
  constructor(private rutaActiva: ActivatedRoute, private _service: ApiService) { }

  // ------Crud methods------
  get_data(){
      const { cat1, cat2} = this.url;
      this._service.get(cat1, cat2, this.get_cat3()).subscribe(data=>{
        this.data_api = data;
        console.log(data);
      });
  }
  get_items_paq(paq){
    this.paquete = paq;
    const { cat1, cat2} = this.url;
      this._service.get(cat1, cat2, 'items-paquetes', paq).subscribe(data=>{
        let arr:any[] = [];
        arr['paquete'] = data.paquete;
        for(let i of data['items']){
          arr.push(i);
        }
        this.toggle_tabs();
        this.tabs.items_paq = true;
        this.data_api = arr;
        console.log(this.data_api);
      });
  }
  add_items_paq(){
    this._service.post(this.url.cat1, this.url.cat2, this.get_cat3(),this.paquete, JSON.stringify(this.get_data_to_send())).subscribe( res =>{
      console.log(res);
      this.get_items_paq(this.paquete);
  });
  }
  add(){
    this._service.post(this.url.cat1, this.url.cat2, this.get_cat3(),this.paquete, JSON.stringify(this.get_data_to_send())).subscribe( res =>{
      console.log(res);
      this.get_data();
  });
  }
  edit_prov(){
    this._service.put(this.url.cat1, this.url.cat2, this.get_cat3(), this.form_edit_prov.id, JSON.stringify(this.form_edit_prov)).subscribe( res =>{
        console.log(res);
        this.get_data();
    });
  }
  edit_item_paq(){
    this._service.put(this.url.cat1, this.url.cat2, this.get_cat3(), this.id_edit_item, JSON.stringify(this.form_edit_item_paq)).subscribe( res =>{
        console.log(res);
        this.get_items_paq(this.paquete);
    });
  }
  delete(){
    this._service.delete(this.url.cat1, this.url.cat2, this.get_cat3(), this.id_delete).subscribe(res =>{
      console.log(res);
      this.get_data();
    });
  }
  delete_item_paq(){
    this._service.delete(this.url.cat1, this.url.cat2, this.get_cat3(), this.id_item_paq_delete.id).subscribe(res =>{
      console.log(res);
      this.get_items_paq(this.paquete);
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
