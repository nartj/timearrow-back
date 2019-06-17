import { BaseValidator } from './BaseValidator';
import { DefaultValidatorType } from "./DefaultValidatorType";
import { StringPattern } from './Pattern/StringPattern';
import { NumberPattern } from './Pattern/NumberPattern';
import { DateOrEmptyStringPattern } from "./Pattern/DateOrEmptyStringPattern";
import { ArrayPattern } from "./Pattern/ArrayPattern";
import { Service } from "typedi";

@Service()
export class EventValidator extends BaseValidator {

    public validateCreateData(requestData: any): void {
        super.validateData(requestData, [
            new DefaultValidatorType('title', new StringPattern(), true, 'title'),
            new DefaultValidatorType('from', new DateOrEmptyStringPattern(), true, 'from'),
            new DefaultValidatorType('to', new DateOrEmptyStringPattern(), true, 'to'),
            new DefaultValidatorType('resume', new StringPattern(), true, 'resume'),
            new DefaultValidatorType('contributions', new ArrayPattern(), true, 'contributions'),
            new DefaultValidatorType('timeline', new NumberPattern(), true, 'timeline'),
        ]);
    }

    validateUpdateData(requestData: any) {
        super.validateData(requestData, [
            new DefaultValidatorType('title', new StringPattern(), false, 'title'),
            new DefaultValidatorType('from', new DateOrEmptyStringPattern(), false, 'from'),
            new DefaultValidatorType('to', new DateOrEmptyStringPattern(), false, 'to'),
            new DefaultValidatorType('resume', new StringPattern(), false, 'resume'),
            new DefaultValidatorType('contributions', new ArrayPattern(), false, 'contributions'),
            new DefaultValidatorType('timeline', new NumberPattern(), false, 'timeline'),
        ]);
    }
}
