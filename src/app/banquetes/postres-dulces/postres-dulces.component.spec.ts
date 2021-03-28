import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostresDulcesComponent } from './postres-dulces.component';

describe('PostresDulcesComponent', () => {
  let component: PostresDulcesComponent;
  let fixture: ComponentFixture<PostresDulcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostresDulcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostresDulcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
