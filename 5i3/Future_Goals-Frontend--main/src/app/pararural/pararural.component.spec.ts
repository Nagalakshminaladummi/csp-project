import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PararuralComponent } from './pararural.component';

describe('PararuralComponent', () => {
  let component: PararuralComponent;
  let fixture: ComponentFixture<PararuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PararuralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PararuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
