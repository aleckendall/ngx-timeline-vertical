export class Point {
    //The diameter of the point
    size: string;
    //The color of the point
    color: string;
    //The border-radius of the point (adjust this if size >= 100px)
    borderRadius: string;

    constructor(_size: string  = '30px', _color: string = '#39CCCC', _borderRadius: string = '30px') {
        this.size = _size;
        this.color = _color;
        this.borderRadius = _borderRadius;
    }

    /**
     * Sets size.
     *
     * @params _size - The string value that size will be set to
     * @returns void
     */
    setSize(_size: string): void {
        this.size = _size;
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
     * Sets borderRadius.
     *
     * @params _borderRadius - The string value that borderRadius will be set to
     * @returns void
     */
    setBorderRadius(_borderRadius: string): void {
        this.borderRadius = _borderRadius;
    }

    /**
     * Returns size.
     *
     * @returns size of type string
     */
    getSize(): string {
        return this.size;
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
     * Returns borderRadius.
     *
     * @returns borderRadius of type string
     */
    getBorderRadius(): string {
        return this.borderRadius;
    }
}