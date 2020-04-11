import { TimelineProperties } from './timelineProperties';
import { Point } from './point';
import { Line } from './line';
import { Event } from './event';

export class TimelineSegment {
    timelineProperties: TimelineProperties;
    Point: Point;
    Event: Event;
    Line: Line;

    constructor(_timelineProperties: TimelineProperties = new TimelineProperties(), _Point: Point = null, 
        _Event: Event = new Event(), _Line: Line = null) {
            this.timelineProperties = _timelineProperties;
            this.Point = _Point;
            this.Event = _Event;
            this.Line = _Line;
    }

    setPoint(_Point: Point): void {
        this.Point = _Point;
    }

    setEvent(_Event: Event): void {
        this.Event = _Event;
    }

    setLine(_Line: Line): void {
        this.Line = _Line;
    }

    getPoint(): Point {
        return this.Point;
    }

    getEvent(): Event {
        return this.Event;
    }

    getLine(): Line {
        return this.Line;
    }

    getTimlineProperties(): TimelineProperties {
        return this.timelineProperties;
    }
}