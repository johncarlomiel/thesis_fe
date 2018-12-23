import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGraphGeneralComponent } from './admin-graph-general.component';

describe('AdminGraphGeneralComponent', () => {
  let component: AdminGraphGeneralComponent;
  let fixture: ComponentFixture<AdminGraphGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGraphGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGraphGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
