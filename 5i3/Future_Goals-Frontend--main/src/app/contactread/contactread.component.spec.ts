import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactreadComponent } from './contactread.component';

describe('ContactreadComponent', () => {
  let component: ContactreadComponent;
  let fixture: ComponentFixture<ContactreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
