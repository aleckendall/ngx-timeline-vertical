import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTimelineComponent } from './ngx-timeline/ngx-timeline.component';
import { NgxTimelinePointComponent } from './ngx-timeline/ngx-timeline-point/ngx-timeline-point.component';
import { NgxTimelineSegmentComponent } from './ngx-timeline/ngx-timeline-segment/ngx-timeline-segment.component';
import { NgxTimelineEventComponent } from './ngx-timeline/ngx-timeline-segment/ngx-timeline-event/ngx-timeline-event.component';
import { NgxTimelineLineComponent } from './ngx-timeline/ngx-timeline-segment/ngx-timeline-line/ngx-timeline-line.component';
import { NgxTimelineTimelineComponent } from './ngx-timeline/ngx-timeline-segment/ngx-timeline-timeline/ngx-timeline-timeline.component';



@NgModule({
  declarations: [NgxTimelineComponent, NgxTimelinePointComponent, NgxTimelineSegmentComponent, NgxTimelineEventComponent, NgxTimelineLineComponent, NgxTimelineTimelineComponent],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, NgxTimelineComponent, NgxTimelinePointComponent, NgxTimelineSegmentComponent, NgxTimelineEventComponent, NgxTimelineLineComponent, NgxTimelineTimelineComponent]
})
export class NgxTimelineVerticalModule { }
