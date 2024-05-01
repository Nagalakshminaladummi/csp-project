import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntergetComponent } from './interget.component';

describe('IntergetComponent', () => {
  let component: IntergetComponent;
  let fixture: ComponentFixture<IntergetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntergetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntergetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
