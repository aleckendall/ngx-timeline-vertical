export class TimelineProperties {
    color: string;
    height: string;

    constructor(_color: string = '#0074D9', _height: string = '100px') {
        this.color = _color;
        this.height = _height;
    }

    setColor(_color: string): void {
        this.color = _color;
    }

    setHeight(_height: string): void {
        this.height = _height;
    }

    getColor(): string {
        return this.color;
    }

    getHeight(): string {
        return this.height;
    }
}