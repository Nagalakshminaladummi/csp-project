import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocagrComponent } from './vocagr.component';

describe('VocagrComponent', () => {
  let component: VocagrComponent;
  let fixture: ComponentFixture<VocagrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocagrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocagrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
