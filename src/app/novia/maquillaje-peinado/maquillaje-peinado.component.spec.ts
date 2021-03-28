import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquillajePeinadoComponent } from './maquillaje-peinado.component';

describe('MaquillajePeinadoComponent', () => {
  let component: MaquillajePeinadoComponent;
  let fixture: ComponentFixture<MaquillajePeinadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquillajePeinadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquillajePeinadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
