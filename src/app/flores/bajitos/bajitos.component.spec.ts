import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajitosComponent } from './bajitos.component';

describe('BajitosComponent', () => {
  let component: BajitosComponent;
  let fixture: ComponentFixture<BajitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
