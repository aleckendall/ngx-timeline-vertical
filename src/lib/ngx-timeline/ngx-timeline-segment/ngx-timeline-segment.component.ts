import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../models/event';
import { Point } from '../../models/point';
import { TimelineSegment } from '../../models/timelineSegment';
import { TimelineProperties } from '../../models/timelineProperties';
import { Line } from '../../models/line';

@Component({
  selector: 'ngx-timeline-segment',
  template: `
    <div [ngClass]="'ngx-timeline-segment-container'">
      <div [ngClass]="'fill'" [ngStyle]="FillContainerWidth()">
        <ngx-timeline-event *ngIf="event.text !== '' && event.side === 'left'" [event]="event" [point]="point"></ngx-timeline-event>
      </div>
      <ngx-timeline-timeline [thickness]="thickness" [properties]="timelineProperties" [point]="point"></ngx-timeline-timeline>
      <div [ngClass]="'fill'" [ngStyle]="FillContainerWidth()">
        <ngx-timeline-event *ngIf="event.text !== '' && event.side === 'right'" [event]="event" [point]="point"></ngx-timeline-event>
      </div>
      <ngx-timeline-line *ngIf="line" [ngStyle]="LinePosStyle()" [line]="line" [point]="point"></ngx-timeline-line>
    </div>
  `,
  styles: [`
    .ngx-timeline-segment-container {
      display: flex;
      width: 100%;
      min-width: 320px;
      position: relative;
      z-index: -1;
    }

    .fill {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class NgxTimelineSegmentComponent implements OnInit {

  //A TimelineSegment object that contains the properties for this segment's timeline, event, and point.
  @Input()
  timelineSegment: TimelineSegment;

  //A string containing the thickness for the timeline.
  @Input()
  thickness: string;


  event: Event;
  timelineProperties: TimelineProperties;
  point: Point;
  line: Line;

  ngOnInit(): void {
    this.setEvent();
    this.setTimeline();
    this.setPoint();
    this.setLine();
  }

  //Set the timline segment event if it exists
  setEvent(): void {
    if (!this.timelineSegment.Event) {
      this.event = new Event();
      this.event.side = '';
      return;
    }
    this.event = this.timelineSegment.Event;
  }

  //Set the properties of the timline itself
  setTimeline(): void {
    this.timelineProperties = this.timelineSegment.timelineProperties;
  }

  //Set the timeline segment point if it exists
  setPoint(): void {
    if (!this.timelineSegment.Point)
      return;
    this.point = this.timelineSegment.Point;
  }

  setLine(): void {
    if (!this.timelineSegment.Line)
      return;
    this.line = this.timelineSegment.Line;
  }

  //Set the width of the divs hosting the timeline event to be equal to (container size - timeline thickness) / 2. This ensures the timelines stay aligned in the center.
  FillContainerWidth(): Object {
    return {
      'min-width': 'calc(50% - (.5 *' + this.thickness + '))',
      'width': '100%'
    }
  }

  //Set the position of the line dependent upon the event side.
  LinePosStyle(): Object {
    if (this.event.getSide() === 'right') {
      return {
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'z-index': '-1'
      }
    } else {
        return {
          'position': 'absolute',
          'top': '50%',
          'right': '50%',
          'z-index': '-1'
        }
      }
    }
}
