import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterinsertComponent } from './registerinsert.component';

describe('RegisterinsertComponent', () => {
  let component: RegisterinsertComponent;
  let fixture: ComponentFixture<RegisterinsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterinsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
