import { Component, OnInit, Input } from '@angular/core';
import { Line } from '../../../models/line';
import { Point } from '../../../models/point';

@Component({
  selector: 'ngx-timeline-line',
  template: `<div [ngStyle]="timelineLineStyle()"></div>`,
  styles: [``]
})
export class NgxTimelineLineComponent implements OnInit {

  @Input()
  line: Line;

  @Input()
  point: Point;

  timelineLineStyle(): Object {
    if(this.point) {
      return {
        'height': '0px',
        'width': 'calc(' + this.point.getSize() + ')',
        'border-top-width': 'calc(' + this.line.thickness + '* 0.5)',
        'border-bottom-width': 'calc(' + this.line.thickness + '* 0.5)',
        'border-top-color': this.line.color,
        'border-bottom-color': this.line.color,
        'border-bottom-style': this.line.style,
        'border-top-style': this.line.style
      }
    }
    return {
      'height': '0px',
      'width': '1rem',
      'border-top-width': 'calc(16px +' + this.line.thickness + '* 0.5)',
      'border-bottom-width': 'calc(16px + ' + this.line.thickness + '* 0.5)',
      'border-top-color': this.line.color,
      'border-bottom-color': this.line.color,
      'border-bottom-style': this.line.style,
      'border-top-style': this.line.style
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
