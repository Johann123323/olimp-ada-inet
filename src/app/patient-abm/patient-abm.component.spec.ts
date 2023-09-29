import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAbmComponent } from './patient-abm.component';

describe('PatientAbmComponent', () => {
  let component: PatientAbmComponent;
  let fixture: ComponentFixture<PatientAbmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientAbmComponent]
    });
    fixture = TestBed.createComponent(PatientAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
