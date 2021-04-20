import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  
  constructor(private rutaActiva: ActivatedRoute) { }
  
  
  ngOnInit(): void {
    // capturando los datos de la ruta
    this.rutaActiva.params.subscribe((params: Params)=>{
      console.log(params);
    })
  }

}
