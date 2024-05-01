import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VochomeComponent } from './vochome.component';

describe('VochomeComponent', () => {
  let component: VochomeComponent;
  let fixture: ComponentFixture<VochomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VochomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VochomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
