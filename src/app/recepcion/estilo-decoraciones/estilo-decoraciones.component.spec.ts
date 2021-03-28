import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstiloDecoracionesComponent } from './estilo-decoraciones.component';

describe('EstiloDecoracionesComponent', () => {
  let component: EstiloDecoracionesComponent;
  let fixture: ComponentFixture<EstiloDecoracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstiloDecoracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstiloDecoracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
