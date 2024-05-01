import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtechgetComponent } from './btechget.component';

describe('BtechgetComponent', () => {
  let component: BtechgetComponent;
  let fixture: ComponentFixture<BtechgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtechgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtechgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
