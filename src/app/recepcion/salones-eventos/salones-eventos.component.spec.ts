import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonesEventosComponent } from './salones-eventos.component';

describe('SalonesEventosComponent', () => {
  let component: SalonesEventosComponent;
  let fixture: ComponentFixture<SalonesEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonesEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonesEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
