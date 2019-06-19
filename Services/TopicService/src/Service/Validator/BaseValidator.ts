import { Validator } from './Validator';
import { DefaultValidatorType } from './DefaultValidatorType';
import { ObjectValidatorType } from './ObjectValidatorType';

export class BaseValidator {

    static readonly ACTION_TYPE_CREATE = 'create';
    static readonly ACTION_TYPE_UPDATE = 'update';

    protected validateData(requestData: any, validators: Validator[]): void {
        validators.forEach((validator: Validator) => {

            if (!this.validateIsRequired(requestData, validator)) {
                return;
            }

            switch (validator.getClass()) {
                case DefaultValidatorType.class:
                    this.validateField(<DefaultValidatorType>validator, requestData);
                    break;

                case ObjectValidatorType.class:
                    this.validateObject(<ObjectValidatorType>validator, requestData);
                    break;

                default:
                    throw new Error('Validator must be instance of Validator');
            }
        });
    }


    protected isRequired(actionType: string): boolean {
        return actionType !== BaseValidator.ACTION_TYPE_UPDATE;
    }

    protected validateField(validator: DefaultValidatorType, requestData: any): void {
        let value = requestData[validator.getField()];

        if (value === null) {
            return;
        }
        if (typeof value === 'string') {
            value = value.trim();
        }
        if (typeof value === 'boolean') {
            value = value ? 'true' : 'false';
        }

        if (Array.isArray(value)) {
            value = `[${value.toString()}]`;
        }

        if (value !== null && typeof value === 'object') {
            throw new Error(validator.getErrorField() + ': ' + validator.getErrorMessage());
        }

        this.validateAllowEmpty(validator, value);

        if (!validator.isValidMinMax(value)) {
            throw new Error(validator.getErrorField() + ': ' + validator.getMinMaxErrorMessage());
        }
        if (!validator.isValidValue(value)) {
            throw new Error(validator.getErrorField() + ': ' + validator.getErrorMessage());
        }
    }

    protected validateObject(validator: ObjectValidatorType, requestData: any): void {
        let field = validator.getField();
        if (field === undefined) {
            return;
        }

        if (typeof requestData.field === 'object') {
            this.validateData(requestData.field, validator.getValidators());
            return;
        }

        throw new Error(validator.getErrorField() + ': ' + validator.getErrorMessage());
    }

    private validateIsRequired(requestData: any, validator: Validator): boolean {
        let dataProperty = validator.getField();
        if (validator.isRequired() && requestData[dataProperty] === undefined) {
            throw new Error(validator.getErrorField() + ': ' + validator.getRequiredMessage());
        }

        if (!validator.isRequired() && requestData[dataProperty] === undefined) {
            return false;
        }

        return true;
    }

    private validateAllowEmpty(validator: Validator, fieldValue: string): void {

        if(!validator.allowEmpty() && fieldValue && fieldValue.length === 0) {
            throw new Error(validator.getErrorField() + ': ' + `The ${validator.getLabel()} parameter cannot be empty`);
        }
    }

}
