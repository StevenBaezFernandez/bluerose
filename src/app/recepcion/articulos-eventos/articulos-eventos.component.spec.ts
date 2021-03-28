import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosEventosComponent } from './articulos-eventos.component';

describe('ArticulosEventosComponent', () => {
  let component: ArticulosEventosComponent;
  let fixture: ComponentFixture<ArticulosEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
