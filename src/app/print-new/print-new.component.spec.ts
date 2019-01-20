import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintNewComponent } from './print-new.component';

describe('PrintNewComponent', () => {
  let component: PrintNewComponent;
  let fixture: ComponentFixture<PrintNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
