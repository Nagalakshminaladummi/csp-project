import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterinsertComponent } from './interinsert.component';

describe('InterinsertComponent', () => {
  let component: InterinsertComponent;
  let fixture: ComponentFixture<InterinsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterinsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
