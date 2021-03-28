import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltosComponent } from './altos.component';

describe('AltosComponent', () => {
  let component: AltosComponent;
  let fixture: ComponentFixture<AltosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
