import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTimelineSegmentComponent } from './ngx-timeline-segment.component';

describe('NgxTimelineSegmentComponent', () => {
  let component: NgxTimelineSegmentComponent;
  let fixture: ComponentFixture<NgxTimelineSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTimelineSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTimelineSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
