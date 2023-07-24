import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsigninComponent } from './emailsignin.component';

describe('EmailsigninComponent', () => {
  let component: EmailsigninComponent;
  let fixture: ComponentFixture<EmailsigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailsigninComponent]
    });
    fixture = TestBed.createComponent(EmailsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
