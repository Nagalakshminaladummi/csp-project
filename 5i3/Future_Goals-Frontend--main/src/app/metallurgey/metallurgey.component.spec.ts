import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallurgeyComponent } from './metallurgey.component';

describe('MetallurgeyComponent', () => {
  let component: MetallurgeyComponent;
  let fixture: ComponentFixture<MetallurgeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetallurgeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetallurgeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
