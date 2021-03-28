import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionesSuvenilesComponent } from './invitaciones-suveniles.component';

describe('InvitacionesSuvenilesComponent', () => {
  let component: InvitacionesSuvenilesComponent;
  let fixture: ComponentFixture<InvitacionesSuvenilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitacionesSuvenilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitacionesSuvenilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
