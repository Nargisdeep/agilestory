import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetimepasscodeComponent } from './onetimepasscode.component';

describe('OnetimepasscodeComponent', () => {
  let component: OnetimepasscodeComponent;
  let fixture: ComponentFixture<OnetimepasscodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnetimepasscodeComponent]
    });
    fixture = TestBed.createComponent(OnetimepasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
