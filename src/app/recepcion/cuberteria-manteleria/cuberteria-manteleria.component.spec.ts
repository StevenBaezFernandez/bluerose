import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuberteriaManteleriaComponent } from './cuberteria-manteleria.component';

describe('CuberteriaManteleriaComponent', () => {
  let component: CuberteriaManteleriaComponent;
  let fixture: ComponentFixture<CuberteriaManteleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuberteriaManteleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuberteriaManteleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
