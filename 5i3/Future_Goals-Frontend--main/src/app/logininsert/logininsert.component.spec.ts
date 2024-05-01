import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogininsertComponent } from './logininsert.component';

describe('LogininsertComponent', () => {
  let component: LogininsertComponent;
  let fixture: ComponentFixture<LogininsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogininsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogininsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
