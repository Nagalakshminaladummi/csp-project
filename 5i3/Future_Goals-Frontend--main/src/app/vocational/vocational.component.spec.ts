import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationalComponent } from './vocational.component';

describe('VocationalComponent', () => {
  let component: VocationalComponent;
  let fixture: ComponentFixture<VocationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocationalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
