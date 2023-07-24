import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductideaComponent } from './productidea.component';

describe('ProductideaComponent', () => {
  let component: ProductideaComponent;
  let fixture: ComponentFixture<ProductideaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductideaComponent]
    });
    fixture = TestBed.createComponent(ProductideaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
