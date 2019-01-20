import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveNewComponent } from './archive-new.component';

describe('ArchiveNewComponent', () => {
  let component: ArchiveNewComponent;
  let fixture: ComponentFixture<ArchiveNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
