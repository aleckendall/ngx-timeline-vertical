import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTimelineLineComponent } from './ngx-timeline-line.component';

describe('NgxTimelineLineComponent', () => {
  let component: NgxTimelineLineComponent;
  let fixture: ComponentFixture<NgxTimelineLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTimelineLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTimelineLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
