import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajeNovioComponent } from './traje-novio.component';

describe('TrajeNovioComponent', () => {
  let component: TrajeNovioComponent;
  let fixture: ComponentFixture<TrajeNovioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrajeNovioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajeNovioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
