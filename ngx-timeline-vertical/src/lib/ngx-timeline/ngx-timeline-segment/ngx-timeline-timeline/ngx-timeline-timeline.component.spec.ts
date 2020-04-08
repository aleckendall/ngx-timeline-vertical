import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTimelineTimelineComponent } from './ngx-timeline-timeline.component';

describe('NgxTimelineTimelineComponent', () => {
  let component: NgxTimelineTimelineComponent;
  let fixture: ComponentFixture<NgxTimelineTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTimelineTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTimelineTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
