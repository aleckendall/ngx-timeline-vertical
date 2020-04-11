export class Point {
    size: string;
    color: string;
    borderRadius: string;

    constructor(_size: string  = '30px', _color: string = '#39CCCC', _borderRadius: string = '30px') {
        this.size = _size;
        this.color = _color;
        this.borderRadius = _borderRadius;
    }

    setSize(_size: string): void {
        this.size = _size;
    }

    setColor(_color: string): void {
        this.color = _color;
    }

    setBorderRadius(_borderRadius: string): void {
        this.borderRadius = _borderRadius;
    }

    getSize(): string {
        return this.size;
    }

    getColor(): string {
        return this.color;
    }

    getBorderRadius(): string {
        return this.borderRadius;
    }
}