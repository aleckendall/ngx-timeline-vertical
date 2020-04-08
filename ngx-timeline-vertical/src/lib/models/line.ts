export class Line {
    //The style of the line
    style: string;
    //The color of the line
    color: string;
    //The thickness of the line
    thickness: string;

    constructor(_style: string = 'solid', _color: string = '#39CCCC', 
    _thickness: string  = '2px') {
        this.style = _style;
        this.color = _color;
        this.thickness = _thickness;
    }

    /**
     * Sets style.
     *
     * @params _style - The string value that style will be set to. All CSS border-style values are valid.
     * @returns void
     */
    setStyle(_style: string): void {
        this.style = _style;
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
     * Sets thickness.
     *
     * @params _thickness - The string value that thickness will be set to
     * @returns void
     */
    setThickness(_thickness: string): void {
        this.thickness = _thickness;
    }

    /**
     * Returns style.
     *
     * @returns style of type string
     */
    getStyle(): string {
        return this.style;
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
     * Returns thickness.
     *
     * @returns thickness of type string
     */
    getThickness(): string {
        return this.thickness;
    }
}