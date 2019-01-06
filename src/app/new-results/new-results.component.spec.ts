import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResultsComponent } from './new-results.component';

describe('NewResultsComponent', () => {
  let component: NewResultsComponent;
  let fixture: ComponentFixture<NewResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
