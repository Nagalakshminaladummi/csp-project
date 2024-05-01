import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineartsComponent } from './finearts.component';

describe('FineartsComponent', () => {
  let component: FineartsComponent;
  let fixture: ComponentFixture<FineartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FineartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
