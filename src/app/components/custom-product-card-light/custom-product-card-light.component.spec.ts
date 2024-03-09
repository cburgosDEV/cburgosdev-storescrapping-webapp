import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductCardLightComponent } from './custom-product-card-light.component';

describe('CustomProductCardLightComponent', () => {
  let component: CustomProductCardLightComponent;
  let fixture: ComponentFixture<CustomProductCardLightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomProductCardLightComponent]
    });
    fixture = TestBed.createComponent(CustomProductCardLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
