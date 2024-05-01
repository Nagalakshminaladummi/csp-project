import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParapathologyComponent } from './parapathology.component';

describe('ParapathologyComponent', () => {
  let component: ParapathologyComponent;
  let fixture: ComponentFixture<ParapathologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParapathologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParapathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
