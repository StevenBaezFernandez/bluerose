import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../services/api.service';
import { TokenService } from '../services/token.service';

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
  empty_data_api:boolean;
  selected_cat1_menu = {
    novia: false,
    novio: false,
    recepcion: false,
    foto_video: false,
    banquetes: false,
    flores: false
  }

  id_img_delete:string;
  url_img_delete:string;
  id_edit_item:number;

  id_item_paq_delete = {
    id: null,
    item: ''
  }
  message_alert:any = {
    show: false,
    text: '',
    success: true
  }

  options_forms:any = {
    editar_nombre: true
  }
  tabs:any = {
    galeria: false,
    paquetes: false,
    proveedores: true,
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
  form_edit_name_paq:any = {
    id: null,
    nombre_paq: ''
  }
  form_add_paq:any = {
    nombre_paq: ''
  }
  paq_to_delete:number;
  id_delete:any;

  items_paq:any[] = [];

  paquete:any;

  form_edit_item_paq:any = {
    id: null,
    paq: null,
    item: ''
  }; 
  items_to_delete:any[] = [];
  show_cont_i_t_delete:boolean;

  img_to_delete:string;

  loader_icon:boolean = false;

  show_file(e){
    const {cat1, cat2='none'} = this.url;
    const file = e.target.files[0];
    this._service.post(cat1, cat2, this.get_cat3(), this.paquete, file ).subscribe(res => {
      console.log(res);
      this.get_data();
      this.setup_message(true, false, 'imagen cargada correctamente!', true);
    });
  }

  reset_cat1_menu(){
    this.selected_cat1_menu.novia = false;
    this.selected_cat1_menu.novio = false;
    this.selected_cat1_menu.recepcion = false;
    this.selected_cat1_menu.foto_video = false;
    this.selected_cat1_menu.banquetes = false;
    this.selected_cat1_menu.flores = false;

  }

  get_router_container(event:any){
    console.log(event)
  }

  get_paq_to_edit(paq_id:number, paq_name:string){
    this.form_edit_name_paq.id = paq_id;
    this.form_edit_name_paq.nombre_paq = paq_name; 
  }
  get_paq_to_delete(id:number){
    this.paq_to_delete = id;
  }
  get_img_to_delete(id:string){
    this.img_to_delete = id;
  }

  setup_message(show:boolean, hide:boolean, text:string, success:boolean){
    this.message_alert.show = show;
    this.message_alert.hide = hide;
    this.message_alert.text = text;
    this.message_alert.success = success;
    setTimeout(()=>{
      this.message_alert.hide = true;
      this.message_alert.show = true;
    },3000);
  }
  vaciar_items_to_delete(){
    this.items_to_delete.forEach(item => {
      const element = document.getElementById(`${item}`) as HTMLInputElement;
      element.checked = false;
    });
    
    this.items_to_delete = [];
    this.toggle_counter();
  }
  toggle_counter(){
    if(this.items_to_delete.length > 0){
      this.show_cont_i_t_delete = true;
    }else{
      this.show_cont_i_t_delete = false;
    }
  }
  
  get_items_to_delete(event:any, item:number){
    const target = event.target;
    if(target.checked ){
      this.items_to_delete.push(item);
    }else{
      this.items_to_delete = this.items_to_delete.filter((i)=>{
        return i != item;
      });
    }
    this.toggle_counter();
    
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
      return this.form_add_paq;
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
  
  constructor(private rutaActiva: ActivatedRoute, private _service: ApiService,private _tokenService: TokenService, private router: Router) { }

  // ------Crud methods------
  get_data(){      
      const { cat1, cat2='none'} = this.url;
      this._service.get(cat1, cat2, this.get_cat3()).subscribe(data=>{
        setTimeout(()=>{
          this.loader_icon = false;
          this.show_option_panel = false;
        },500);
        this.data_api = data;
        if(this.data_api.length === 0){
          this.empty_data_api = true;
        }else{
          this.empty_data_api = false;
        }
        console.log(data);
      });
  }
  get_items_paq(paq){
    this.paquete = paq;
    const { cat1, cat2='none'} = this.url;
      this._service.get(cat1, cat2, 'items-paquetes', paq).subscribe(data=>{
        setTimeout(()=>{
          this.loader_icon = false;
          this.show_option_panel = false;
        },500);
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
    const { cat1, cat2='none'} = this.url;
    this._service.post(cat1, cat2, this.get_cat3(),this.paquete, JSON.stringify(this.get_data_to_send())).subscribe( res =>{
      console.log(res);
      this.setup_message(true, false, '¡Elemento guardado correctamente!', true);
      this.get_items_paq(this.paquete);
  });
  }
  add(){
    const { cat1, cat2='none'} = this.url;
    this._service.post(cat1, cat2, this.get_cat3(),this.paquete, JSON.stringify(this.get_data_to_send())).subscribe( res =>{
      console.log(res);
      this.setup_message(true, false,  '¡Elemento guardado correctamente!', true);
      this.get_data();
  });
  }

  add_paq(){
    const { cat1, cat2='none'} = this.url;
    this._service.post(cat1, cat2, this.get_cat3(),this.paquete, JSON.stringify(this.get_data_to_send())).subscribe( res =>{
      console.log(res);
      this.setup_message(true, false,  '¡Elemento guardado correctamente!', true);
      this.get_data();
      console.log(this.url);
  });
  }  

  edit_prov(){
    
    this._service.put(this.url.cat1, this.url.cat2, this.get_cat3(), this.form_edit_prov.id, JSON.stringify(this.form_edit_prov)).subscribe( res =>{
        console.log(res);
        this.setup_message(true, false,  '¡Elemento editado correctamente!', true);
        this.get_data();
    });
  }
  edit_item_paq(){
    
    this._service.put(this.url.cat1, this.url.cat2, this.get_cat3(), this.id_edit_item, JSON.stringify(this.form_edit_item_paq)).subscribe( res =>{
        console.log(res);
        this.setup_message(true, false, '¡Elemento editado correctamente!', true);
        this.get_items_paq(this.paquete);
    });
  }
  edit_name_paq(){
    this._service.put(this.url.cat1, this.url.cat2, this.get_cat3(), this.form_edit_name_paq.id, JSON.stringify(this.form_edit_name_paq)).subscribe( res =>{
      console.log(res);
      this.setup_message(true, false, '¡Elemento editado correctamente!', true);
      this.get_data();
  });
  }
  delete(){
    
    this._service.delete(this.url.cat1, this.url.cat2, this.get_cat3(), this.id_delete).subscribe(res =>{
      console.log(res);
      this.setup_message(true, false, '¡Elemento eliminado correctamente!', true);
      this.get_data();
    });
  }
  delete_paq(){
    
    this._service.delete(this.url.cat1, this.url.cat2, this.get_cat3(), this.paq_to_delete).subscribe(res =>{
      console.log(res);
      this.setup_message(true, false, '¡Elemento eliminado correctamente!', true);
      this.get_data();
    });
  }
  delete_item_paq(){
    
    this._service.delete(this.url.cat1, this.url.cat2, this.get_cat3(), this.id_item_paq_delete.id).subscribe(res =>{
      console.log(res);
      this.setup_message(true, false, '¡Elemento eliminado correctamente!', true);
      this.get_items_paq(this.paquete);
    });
  }
  delete_img(){
    
    this._service.delete(this.url.cat1, this.url.cat2, this.get_cat3(), this.img_to_delete).subscribe(res =>{
      console.log(res);
      this.setup_message(true, false, '¡Imagen eliminada correctamente!', true);
      this.get_data();
    });
  }

  delete_items_paq(){
    
    let items:string = "";
    this.items_to_delete.forEach(item => {
      items += (item + '/');
    });
    this._service.delete(this.url.cat1, this.url.cat2, this.get_cat3(), this.id_item_paq_delete.id, items).subscribe(res =>{
      this.vaciar_items_to_delete();
      console.log(res);
      this.setup_message(true, false, '¡Elementos eliminados correctamente!', true);
      this.get_items_paq(this.paquete);
    });
  }
  
  ngOnInit(): void {

  if(this._tokenService.token == 'invalid'){
    this.router.navigate(['/login']);
  }







    // capturando los datos de la ruta
    this.rutaActiva.params.subscribe((params: Params)=>{
      this.url = params;  
      this.get_data();

      const buttons_nav = document.querySelectorAll('.button-nav');
      buttons_nav.forEach(btn =>{
        btn.classList.remove('button-nav--active');
      });
    });

    const btn_nav_seletd = document.getElementById(`button-nav_${this.url.cat1}`) as HTMLBodyElement;    
    btn_nav_seletd.classList.add('button-nav--active');
    console.log(btn_nav_seletd);
    

    var height = window.screen.height * .8;
    let cont_component = document.querySelector('.content-component__body') as HTMLBodyElement;
    cont_component.style.height = `${height}px`;

  }


}
