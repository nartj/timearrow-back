import { Validator } from './Validator';
import { Pattern } from './Pattern/Pattern';

export class DefaultValidatorType extends Validator {
    public static class: string = 'DefaultValidatorType';

    public getClass(): string {
        return 'DefaultValidatorType';
    }

    protected field: string;

    protected label: string;

    protected pattern: Pattern;

    protected isRequiredBool: boolean;

    protected validationErrorMessage: string;

    protected parentField: string;

    protected allowEmptyBool: boolean;

    constructor(field: string,
                pattern: Pattern,
                isRequired: boolean,
                label: string = undefined,
                validationErrorMessage: string = undefined,
                parentField: string = undefined,
                allowEmpty: boolean = false) {
        super();
        this.field = field ? field.trim() : undefined;
        this.pattern = pattern;
        this.label = label ? label.trim() : undefined;
        this.isRequiredBool = isRequired;
        this.validationErrorMessage = validationErrorMessage ? validationErrorMessage.trim() : undefined;
        this.parentField = parentField;
        this.allowEmptyBool = allowEmpty;
    }

    public getField(): string {
        return this.field;
    }


    public getErrorField(): string {
        let fieldSuffix = '';
        if (this.parentField) {
            fieldSuffix = this.parentField + '.';
        }

        return fieldSuffix + this.field;
    }

    public getLabel(): string {
        return this.label ? this.label : this.getField();
    }

    public getPattern(): Pattern {
        return this.pattern;
    }

    public isRequired(): boolean {
        return this.isRequiredBool;
    }

    public isValidMinMax(value: string): boolean {
        return this.getPattern().isMinCorrect(value)
            && this.getPattern().isMaxCorrect(value);
    }

    public isValidValue(value: string): boolean {
        return this.getPattern().isValidValue(value);
    }

    public allowEmpty(): boolean {
        return this.allowEmptyBool;
    }

    public getMinMaxErrorMessage(): string {
        return `${this.getLabel()} ${this.getPattern().getMinMaxMessageText()}`;
    }

    public getErrorMessage(): string {
        let messageTemplate = this.validationErrorMessage ? this.validationErrorMessage : "Please enter %label% in format: %correctFormatText%";

        return messageTemplate
            .replace('%field%', this.getField())
            .replace('%label%', this.getLabel())
            .replace('%correctFormatText%', this.pattern.getCorrectFormatText());
    }

    public getRequiredMessage(): string {
        return `${this.getLabel()} is required`;
    }
}
