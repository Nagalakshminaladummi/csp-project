import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincoursereadComponent } from './admincourseread.component';

describe('AdmincoursereadComponent', () => {
  let component: AdmincoursereadComponent;
  let fixture: ComponentFixture<AdmincoursereadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincoursereadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincoursereadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
