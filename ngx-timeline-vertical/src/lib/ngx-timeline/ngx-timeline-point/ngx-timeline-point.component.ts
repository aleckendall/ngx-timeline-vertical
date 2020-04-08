import { Component, Input } from '@angular/core';
import { Point } from '../../models/point';

@Component({
  selector: 'ngx-timeline-point',
  template: ` <div [ngStyle]="shapeStyle()"></div>`,
  styles: [``]
})
export class NgxTimelinePointComponent {

  @Input()
  timelinePoint: Point;
  shapeStyle(): Object {
    return {
      'height': this.timelinePoint.size, 
      'width': this.timelinePoint.size,
      'background': this.timelinePoint.color,
      'border-radius': this.timelinePoint.borderRadius,
      'margin': '0',
      'padding': '0'
    }
  }
}
