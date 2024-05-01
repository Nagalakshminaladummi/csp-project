import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroComponent } from './aero.component';

describe('AeroComponent', () => {
  let component: AeroComponent;
  let fixture: ComponentFixture<AeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
