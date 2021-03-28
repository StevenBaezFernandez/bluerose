import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesFotosComponent } from './sesiones-fotos.component';

describe('SesionesFotosComponent', () => {
  let component: SesionesFotosComponent;
  let fixture: ComponentFixture<SesionesFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionesFotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionesFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
