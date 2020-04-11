export class Event {
    text: string;
    fontColor: string;
    fontSize: string;
    side: string;

    constructor(_fontColor: string = '#5D21D0', _fontSize: string  = '16px', 
    _side: string = 'right', _text: string = '') {
        this.text = _text;
        this.fontColor = _fontColor;
        this.fontSize = _fontSize;
        this.side = _side;
    }

    setText(_text: string): Event {
        this.text = _text;
        return this;
    }

    setFontColor(_fontColor: string): Event {
        this.fontColor = _fontColor;
        return this;
    }

    setFontSize(_fontSize: string): Event {
        this.fontSize = _fontSize;
        return this;
    }


    setSide(_side: string): Event {
        this.side = _side;
        return this;
    }


    getText(): string {
        return this.text;
    }

    getFontColor(): string {
        return this.fontColor;
    }

    getFontSize(): string {
        return this.fontSize;
    }

    getSide(): string {
        return this.side;
    }
}