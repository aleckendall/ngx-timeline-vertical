export class TimelineProperties {
    //The timeline color
    color: string;
    //The timeline height (If an event is present, the timeline height will adjust based on the width of the screen)
    height: string;

    constructor(_color: string = '#0074D9', _height: string = '100px') {
        this.color = _color;
        this.height = _height;
    }

    /**
     * Sets color.
     *
     * @params _color - The string value that color will be set to
     * @returns void
     */
    setColor(_color: string): void {
        this.color = _color;
    }

    /**
     * Sets height.
     *
     * @params _height - The string value that height will be set to
     * @returns void
     */
    setHeight(_height: string): void {
        this.height = _height;
    }

    /**
     * Returns color.
     *
     * @returns color of type string
     */
    getColor(): string {
        return this.color;
    }

    /**
     * Returns height.
     *
     * @returns height of type string
     */
    getHeight(): string {
        return this.height;
    }
}