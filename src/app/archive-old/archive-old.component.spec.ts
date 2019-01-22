import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveOldComponent } from './archive-old.component';

describe('ArchiveOldComponent', () => {
  let component: ArchiveOldComponent;
  let fixture: ComponentFixture<ArchiveOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
