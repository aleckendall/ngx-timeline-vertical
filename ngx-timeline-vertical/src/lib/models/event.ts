export class Event {
    //The text to display next to the timeline
    text: string;
    //The color of the text
    fontColor: string;
    //The size of the text
    fontSize: string;
    //The side of the timeline to display the text
    side: string;

    constructor(_fontColor: string = '#5D21D0', _fontSize: string  = '16px', 
    _side: string = 'right', _text: string = '') {
        this.text = _text;
        this.fontColor = _fontColor;
        this.fontSize = _fontSize;
        this.side = _side;
    }

    /**
     * Sets text.
     *
     * @params _text - The string value that text will be set to
     * @returns void
     */
    setText(_text: string): Event {
        this.text = _text;
        return this;
    }

    /**
     * Sets fontColor.
     *
     * @params _fontColor - The string value that fontColor will be set to
     * @returns void
     */
    setFontColor(_fontColor: string): Event {
        this.fontColor = _fontColor;
        return this;
    }

    /**
     * Sets fontSize.
     *
     * @params _fontSize - The string value that fontSize will be set to
     * @returns void
     */
    setFontSize(_fontSize: string): Event {
        this.fontSize = _fontSize;
        return this;
    }

    /**
     * Sets side.
     *
     * @params _side - The string value that side will be set to
     * @returns void
     */
    setSide(_side: string): Event {
        this.side = _side;
        return this;
    }

    /**
     * Returns text.
     *
     * @returns text of type string
     */
    getText(): string {
        return this.text;
    }

    /**
     * Returns fontColor.
     *
     * @returns fontColor of type string
     */
    getFontColor(): string {
        return this.fontColor;
    }

    /**
     * Returns fontSize.
     *
     * @returns fontSize of type string
     */
    getFontSize(): string {
        return this.fontSize;
    }

    /**
     * Returns side.
     *
     * @returns side of type string
     */
    getSide(): string {
        return this.side;
    }
}