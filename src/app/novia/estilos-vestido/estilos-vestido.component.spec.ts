import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilosVestidoComponent } from './estilos-vestido.component';

describe('EstilosVestidoComponent', () => {
  let component: EstilosVestidoComponent;
  let fixture: ComponentFixture<EstilosVestidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstilosVestidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstilosVestidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
