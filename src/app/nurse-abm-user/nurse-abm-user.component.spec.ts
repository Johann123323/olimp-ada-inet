import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseAbmUserComponent } from './nurse-abm-user.component';

describe('NurseAbmUserComponent', () => {
  let component: NurseAbmUserComponent;
  let fixture: ComponentFixture<NurseAbmUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NurseAbmUserComponent]
    });
    fixture = TestBed.createComponent(NurseAbmUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
