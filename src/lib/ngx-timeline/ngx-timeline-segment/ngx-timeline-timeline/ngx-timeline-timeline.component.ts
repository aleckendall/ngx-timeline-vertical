import { Component, Input } from '@angular/core';
import { Point } from '../../../models/point';
import { TimelineProperties } from '../../../models/timelineProperties';

@Component({
  selector: 'ngx-timeline-timeline',
  template: `
  <div [ngClass]="'ngx-timeline-timeline'" [ngStyle]="timelineStyle()">
    <ngx-timeline-point *ngIf="point" [timelinePoint]="point"></ngx-timeline-point>
  </div>
  `,
  styles: [`
    .ngx-timeline-timeline {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxTimelineTimelineComponent {

  @Input()
  point: Point;

  @Input()
  properties: TimelineProperties;

  @Input()
  thickness: String;

  timelineStyle(): object {
    return {
      'width': this.thickness,
      'min-height': this.properties.height,
      'height': '100%',
      'background': this.properties.color
    }
  }
}
