import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonnerComponent } from './boutonner.component';

describe('BoutonnerComponent', () => {
  let component: BoutonnerComponent;
  let fixture: ComponentFixture<BoutonnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
