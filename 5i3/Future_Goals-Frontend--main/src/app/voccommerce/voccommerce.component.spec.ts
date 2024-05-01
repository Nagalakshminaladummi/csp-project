import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoccommerceComponent } from './voccommerce.component';

describe('VoccommerceComponent', () => {
  let component: VoccommerceComponent;
  let fixture: ComponentFixture<VoccommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoccommerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoccommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
