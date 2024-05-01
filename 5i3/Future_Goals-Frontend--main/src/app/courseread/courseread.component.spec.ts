import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursereadComponent } from './courseread.component';

describe('CoursereadComponent', () => {
  let component: CoursereadComponent;
  let fixture: ComponentFixture<CoursereadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursereadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursereadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
