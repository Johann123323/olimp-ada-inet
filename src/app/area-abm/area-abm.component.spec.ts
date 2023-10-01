import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAbmComponent } from './area-abm.component';

describe('AreaAbmComponent', () => {
  let component: AreaAbmComponent;
  let fixture: ComponentFixture<AreaAbmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaAbmComponent]
    });
    fixture = TestBed.createComponent(AreaAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
