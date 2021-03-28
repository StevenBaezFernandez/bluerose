import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostresSaladosComponent } from './postres-salados.component';

describe('PostresSaladosComponent', () => {
  let component: PostresSaladosComponent;
  let fixture: ComponentFixture<PostresSaladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostresSaladosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostresSaladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
