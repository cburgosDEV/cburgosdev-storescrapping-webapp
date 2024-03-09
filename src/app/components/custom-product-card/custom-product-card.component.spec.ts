import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductCardComponent } from './custom-product-card.component';

describe('CustomProductCardComponent', () => {
  let component: CustomProductCardComponent;
  let fixture: ComponentFixture<CustomProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomProductCardComponent]
    });
    fixture = TestBed.createComponent(CustomProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
