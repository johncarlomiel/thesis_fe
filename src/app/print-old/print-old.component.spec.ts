import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintOldComponent } from './print-old.component';

describe('PrintOldComponent', () => {
  let component: PrintOldComponent;
  let fixture: ComponentFixture<PrintOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
