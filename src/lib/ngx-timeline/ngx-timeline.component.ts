import { Component, Input } from '@angular/core';
import { Point } from '../models/point';
import { TimelineSegment } from '../models/timelineSegment';

@Component({
  selector: 'ngx-timeline',
  template: `
  <div [ngClass]="'ngx-timeline-vertical'" [ngStyle]="TimelineStyle()" *ngIf="timelineSegments">
      
      <ngx-timeline-point 
      *ngIf="startpoint"
      [timelinePoint]="startpoint"
      [ngStyle]="StartpointPos()">
      </ngx-timeline-point>

      <ngx-timeline-segment *ngFor="let timelineSegment of timelineSegments;" [timelineSegment]="timelineSegment" [thickness]="timelineThickness"></ngx-timeline-segment>

      <ngx-timeline-point 
      *ngIf="endpoint"
      [timelinePoint]="endpoint"
      [ngStyle]="EndpointPos()">
      </ngx-timeline-point>
      
  </div>
  `,
  styles: [`
    .ngx-timeline-vertical {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      position: relative;
    }
  `]
})
export class NgxTimelineComponent {
  

  //Pass as input the thickness of the timeline. If no value is passed, the timeline
  //thickness will default to 10px.
  @Input()
  timelineThickness: string;

  //Pass as input the timeline events with the configured options. If no values are passed,
  //the timeline events will not be used and a timeline will not be created.
  @Input() 
  timelineSegments: TimelineSegment[];

  //Pass as input the timeline start point with the configured options. If no values are passed,
  //the timeline start point is not used.
  @Input()
  startpoint: Point;

  //Pass as input the timeline end point with the configured options. If no values are passed,
  //the timeline end point is not used.
  @Input()
  endpoint: Point;

  //Pass as input true if the timeline should be horizontal. 
  @Input()
  horizontal: boolean;

  //Set the margin of the vertical timeline. Adjust the margin based on the size of the startpoint. The endpoint will
  //be used if the it exists and the startpoint does not.
  TimelineStyle(): Object {
    var pointToUse: string;
    if (this.startpoint) {
      if (this.endpoint) {
        pointToUse = '(' + this.endpoint.size + ' + ' + this.startpoint.size + ')';
      } else {
        pointToUse = this.startpoint.size + '* 1.25';
      }
    } else if (this.endpoint){
      pointToUse = this.endpoint.size + '* 1.25';
    } else {
      pointToUse = '2rem';
    }

    return this.horizontal ? {
      'margin-top': 'calc((' + pointToUse + ' * .5)',
      'margin-bottom': 'calc((' + pointToUse + ' * .5)',
      'transform': 'rotate(90deg)'
    } : {
      'margin-top': 'calc((' + pointToUse + ' * .5)',
      'margin-bottom': 'calc((' + pointToUse + ' * .5)'
    };
  }

  //Set the css properties values for the timeline endpoint. The right and bottom positioning take into account the diameter of the point so that it is centered on the timeline.
  EndpointPos(): Object {
    return {
      'position': 'absolute',
      'right': 'calc(50% - (' + this.endpoint.size + '* .5))',
      'bottom': 'calc(-.5 * ' + this.endpoint.size + ')'
    }
  }

  //Set the css properties values for the timeline startpoint. The right and top positioning take into account the diameter of the point so that it is centered on the timeline.
  StartpointPos(): Object {
    return {
      'position': 'absolute',
      'right': 'calc(50% - (' + this.startpoint.size + '* .5))',
      'top': 'calc(-.5 * ' + this.startpoint.size + ')'
    }
  }
}
