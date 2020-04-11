import { Component, Input} from '@angular/core';
import { Event } from '../../../models/event';
import { Point } from '../../../models/point';

@Component({
  selector: 'ngx-timeline-event',
  template: 
  `
    <div [ngClass]="'ngx-timeline-event-container'" [ngStyle]="eventMargins()">
      <p>{{event.text}}</p>
    </div>
  `,
  styles: [`
    .ngx-timeline-event-container {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgba(25, 25, 25, 0.01);
      box-shadow: 0px 0px 20px 5px rgba(3, 4, 5, 0.09);
      background: white;
    }
    p {
      color: event.fontColor;
      font-size: event.fontSize;
      margin-left: .25rem;
      margin-right: .25rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxTimelineEventComponent {

  //Pass as input the timeline event with the configured options. If no values are passed,
  //the timeline event is not created.
  @Input()
  event: Event;

  @Input()
  point: Point;
  
  eventMargins(): object {
    if (this.point) 
      return {
        'margin-left': 'calc(' + this.point.getSize() + '* .75)',
        'margin-right': 'calc(' + this.point.getSize() + '* .75)'
      }
    return {
      'margin-left': '1rem',
      'margin-right': '1rem'
    }
  }
}
