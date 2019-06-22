import { BaseValidator } from './BaseValidator';
import { DefaultValidatorType } from "./DefaultValidatorType";
import { StringPattern } from './Pattern/StringPattern';
import { NumberPattern } from './Pattern/NumberPattern';
import { ArrayPattern } from "./Pattern/ArrayPattern";
import { Service } from "typedi";

@Service()
export class EventValidator extends BaseValidator {

    public validateCreateData(requestData: any): void {
        super.validateData(requestData, [
            new DefaultValidatorType('title', new StringPattern(), true, 'title'),
            new DefaultValidatorType('from', new StringPattern(), true, 'from'),
            new DefaultValidatorType('to', new StringPattern(), false, 'to'),
            new DefaultValidatorType('resume', new StringPattern(), false, 'resume'),
            new DefaultValidatorType('contributions', new ArrayPattern(), false, 'contributions'),
            new DefaultValidatorType('timeline', new NumberPattern(), false, 'timeline'),
        ]);
    }

    validateUpdateData(requestData: any) {
        super.validateData(requestData, [
            new DefaultValidatorType('title', new StringPattern(), false, 'title'),
            new DefaultValidatorType('from', new StringPattern(), false, 'from'),
            new DefaultValidatorType('to', new StringPattern(), false, 'to'),
            new DefaultValidatorType('resume', new StringPattern(), false, 'resume'),
            new DefaultValidatorType('contributions', new ArrayPattern(), false, 'contributions'),
            new DefaultValidatorType('timeline', new NumberPattern(), false, 'timeline'),
        ]);
    }
}
