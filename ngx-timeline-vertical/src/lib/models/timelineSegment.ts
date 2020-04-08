import { TimelineProperties } from './timelineProperties';
import { Point } from './point';
import { Line } from './line';
import { Event } from './event';

export class TimelineSegment {
    //The properties for the timeline, only applies to this segment
    timelineProperties: TimelineProperties;
    //The point for the timeline segment
    Point: Point;
    //The event for the timeline segment
    Event: Event;
    //The line that attaches to the timeline segment event and the timeline
    Line: Line;

    constructor(_timelineProperties: TimelineProperties = new TimelineProperties(), _Point: Point = null, 
        _Event: Event = new Event(), _Line: Line = null) {
            this.timelineProperties = _timelineProperties;
            this.Point = _Point;
            this.Event = _Event;
            this.Line = _Line;
    }

    /**
     * Sets Line.
     *
     * @params _Point - The Point that Point will be set to
     * @returns void
     */
    setPoint(_Point: Point): void {
        this.Point = _Point;
    }

    /**
     * Sets Event.
     *
     * @params _Event - The Event object that Event will be set to
     * @returns void
     */
    setEvent(_Event: Event): void {
        this.Event = _Event;
    }

    /**
     * Sets Line.
     *
     * @params _Line - The Line object that Line will be set to
     * @returns void
     */
    setLine(_Line: Line): void {
        this.Line = _Line;
    }

    /**
     * Returns Point.
     *
     * @returns Point of type Point
     */
    getPoint(): Point {
        return this.Point;
    }

    /**
     * Returns Event.
     *
     * @returns Event of type Event
     */
    getEvent(): Event {
        return this.Event;
    }

     /**
     * Returns Line.
     *
     * @returns Line of type Line
     */
    getLine(): Line {
        return this.Line;
    }

    /**
     * Returns timelineProperties.
     *
     * @returns timelineProperties of type TimlineProperties
     */
    getTimlineProperties(): TimelineProperties {
        return this.timelineProperties;
    }
}