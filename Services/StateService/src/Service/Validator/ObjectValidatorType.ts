import { Validator } from './Validator';

export class ObjectValidatorType extends Validator {
    public static class: string = 'ObjectValidatorType';

    public getClass(): string {
        return 'ObjectValidatorType';
    }

    private field: string;

    private validators: Validator[];

    private isRequiredBool: boolean;

    private validationErrorMessage: string;

    constructor (field: string,
                 validators: Validator[],
                 isRequired: boolean = true,
                 validationErrorMessage: string = '')
    {
        super();
        this.field = field;
        this.validators = validators;
        this.isRequiredBool = isRequired;
        this.validationErrorMessage = validationErrorMessage;
    }

    public getField(): string {
        return this.field;
    }

    public getErrorField(): string {
        return this.getField();
    }

    public getLabel(): string {
        return this.field + ' object';
    }

    public getValidators(): Validator[] {
        return this.validators;
    }

    public isRequired(): boolean {
        return this.isRequiredBool;
    }

    public allowEmpty(): boolean  {
        return false;
    }

    public getErrorMessage(): string {
        return this.validationErrorMessage ? this.validationErrorMessage : `The '${this.getLabel()}' parameter is not an object`;
    }

    public getRequiredMessage(): string {
        return `The required '${this.getLabel()}' parameter is missing`;
    }
}
