export class Line {
    style: string;
    color: string;
    thickness: string;

    constructor(_style: string = 'solid', _color: string = '#39CCCC', 
    _thickness: string  = '2px') {
        this.style = _style;
        this.color = _color;
        this.thickness = _thickness;
    }

    setStyle(_style: string): void {
        this.style = _style;
    }

    setColor(_color: string): void {
        this.color = _color;
    }

    setThickness(_thickness: string): void {
        this.thickness = _thickness;
    }

    getStyle(): string {
        return this.style;
    }

    getColor(): string {
        return this.color;
    }

    getThickness(): string {
        return this.thickness;
    }
}