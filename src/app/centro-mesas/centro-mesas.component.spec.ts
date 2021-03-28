import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroMesasComponent } from './centro-mesas.component';

describe('CentroMesasComponent', () => {
  let component: CentroMesasComponent;
  let fixture: ComponentFixture<CentroMesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroMesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
