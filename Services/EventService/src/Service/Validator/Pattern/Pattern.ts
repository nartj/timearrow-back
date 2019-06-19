export class Pattern {
    public readonly PATTERN_DEFAULT = /^.*/;

    protected pattern: RegExp;

    protected min: number;

    protected max: number;

    protected correctFormatText: string;

    constructor (pattern: RegExp = undefined,
                 min: number = undefined,
                 max: number = undefined,
                 correctFormatText: string = '') {
        this.pattern = pattern;
        this.min = min;
        this.max = max;
        this.correctFormatText = correctFormatText;
    }

    public getMin(): number {
        return this.min;
    }

    public getMax(): number {
        return this.max;
    }

    public isMinCorrect(value: string): boolean {
        if (this.min === undefined) {
            return true;
        }

        return this.getValueLength(value) >= this.min;
    }

    public isMaxCorrect(value: string): boolean {
        if (this.max === undefined) {
            return true;
        }

        return this.getValueLength(value) <= this.max;
    }

    public isValidValue(value: string): boolean {
        return this.getPattern().test(value);
    }

    public getMinMaxMessageText(): string {
        let min = this.getMin();
        let max = this.getMax();

        if (min !== undefined && max !== undefined) {
            return `must be between ${min} - ${max} characters long`;
        }
        if (min !== undefined) {
            return `must be at least ${min} characters long`;
        }
        if (max !== undefined) {
            return `must be maximum ${max} characters long`;
        }

        return '';
    }

    public getCorrectFormatText(): string {
        return this.correctFormatText;
    }

    protected getPattern(): RegExp {
        return this.pattern ? this.pattern : this.PATTERN_DEFAULT;
    }

    protected getValueLength(value: string): number {
        return value ? value.length : 0;
    }

    protected setCorrectFormatText(correctFormatText: string): void {
        this.correctFormatText = correctFormatText;
    }
}
