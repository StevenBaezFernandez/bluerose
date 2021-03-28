import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjuaresComponent } from './ajuares.component';

describe('AjuaresComponent', () => {
  let component: AjuaresComponent;
  let fixture: ComponentFixture<AjuaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjuaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjuaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
