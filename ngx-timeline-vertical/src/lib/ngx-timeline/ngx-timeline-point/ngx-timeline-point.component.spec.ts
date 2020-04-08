import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTimelinePointComponent } from './ngx-timeline-point.component';

describe('NgxTimelinePointComponent', () => {
  let component: NgxTimelinePointComponent;
  let fixture: ComponentFixture<NgxTimelinePointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTimelinePointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTimelinePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
