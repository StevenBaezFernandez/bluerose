import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyShowerComponent } from './baby-shower.component';

describe('BabyShowerComponent', () => {
  let component: BabyShowerComponent;
  let fixture: ComponentFixture<BabyShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyShowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
