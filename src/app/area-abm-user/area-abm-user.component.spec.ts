import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAbmUserComponent } from './area-abm-user.component';

describe('AreaAbmUserComponent', () => {
  let component: AreaAbmUserComponent;
  let fixture: ComponentFixture<AreaAbmUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaAbmUserComponent]
    });
    fixture = TestBed.createComponent(AreaAbmUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
