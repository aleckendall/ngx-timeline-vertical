/*
 * Public API Surface of ngx-timeline
 */
export * from './lib/models/event';
export * from './lib/models/point';
export * from './lib/models/line';
export * from './lib/models/timelineProperties';
export * from './lib/models/timelineSegment';
export * from './lib/ngx-timeline-vertical.module';

export { NgxTimelineComponent } from './lib/ngx-timeline/ngx-timeline.component';
export { NgxTimelinePointComponent }  from './lib/ngx-timeline/ngx-timeline-point/ngx-timeline-point.component';
export { NgxTimelineSegmentComponent }  from './lib/ngx-timeline/ngx-timeline-segment/ngx-timeline-segment.component';
export { NgxTimelineEventComponent }  from './lib/ngx-timeline/ngx-timeline-segment/ngx-timeline-event/ngx-timeline-event.component';
export { NgxTimelineLineComponent }  from './lib/ngx-timeline/ngx-timeline-segment/ngx-timeline-line/ngx-timeline-line.component';
export { NgxTimelineTimelineComponent }  from './lib/ngx-timeline/ngx-timeline-segment/ngx-timeline-timeline/ngx-timeline-timeline.component';