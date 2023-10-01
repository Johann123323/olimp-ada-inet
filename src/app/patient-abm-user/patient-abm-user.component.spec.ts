import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAbmUserComponent } from './patient-abm-user.component';

describe('PatientAbmUserComponent', () => {
  let component: PatientAbmUserComponent;
  let fixture: ComponentFixture<PatientAbmUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientAbmUserComponent]
    });
    fixture = TestBed.createComponent(PatientAbmUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
