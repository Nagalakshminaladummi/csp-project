import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtechinsertComponent } from './btechinsert.component';

describe('BtechinsertComponent', () => {
  let component: BtechinsertComponent;
  let fixture: ComponentFixture<BtechinsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtechinsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtechinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
