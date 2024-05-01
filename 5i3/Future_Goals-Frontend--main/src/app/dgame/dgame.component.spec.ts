import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgameComponent } from './dgame.component';

describe('DgameComponent', () => {
  let component: DgameComponent;
  let fixture: ComponentFixture<DgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
