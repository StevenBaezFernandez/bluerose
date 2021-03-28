import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonidoMusicaAmbientacionesComponent } from './sonido-musica-ambientaciones.component';

describe('SonidoMusicaAmbientacionesComponent', () => {
  let component: SonidoMusicaAmbientacionesComponent;
  let fixture: ComponentFixture<SonidoMusicaAmbientacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonidoMusicaAmbientacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonidoMusicaAmbientacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
