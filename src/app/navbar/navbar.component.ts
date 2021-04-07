import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  toggle_novia:boolean = false;
  toggle_novio:boolean = false;
  toggle_recepcion:boolean = false;
  toggle_foto_video:boolean = false;
  toggle_banquetes:boolean = false;
  toggle_flores:boolean = false;

  

  constructor() { }

  ngOnInit(): void {
  }

}
