import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseAbmComponent } from './nurse-abm.component';

describe('NurseAbmComponent', () => {
  let component: NurseAbmComponent;
  let fixture: ComponentFixture<NurseAbmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NurseAbmComponent]
    });
    fixture = TestBed.createComponent(NurseAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
