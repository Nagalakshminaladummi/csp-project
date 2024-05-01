import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterreadComponent } from './registerread.component';

describe('RegisterreadComponent', () => {
  let component: RegisterreadComponent;
  let fixture: ComponentFixture<RegisterreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
