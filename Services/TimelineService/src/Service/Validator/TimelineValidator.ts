import { BaseValidator } from './BaseValidator';
import { DefaultValidatorType } from "./DefaultValidatorType";
import { StringPattern } from './Pattern/StringPattern';
import { NumberPattern } from './Pattern/NumberPattern';
import { Service } from "typedi";
import {DateOrEmptyStringPattern} from "./Pattern/DateOrEmptyStringPattern";
import {ArrayPattern} from "./Pattern/ArrayPattern";

@Service()
export class TimelineValidator extends BaseValidator {

    public validateCreateData(requestData: any): void {
        super.validateData(requestData, [
            new DefaultValidatorType('title', new StringPattern(), true, 'title'),
            new DefaultValidatorType('from', new DateOrEmptyStringPattern(), true, 'from'),
            new DefaultValidatorType('to', new DateOrEmptyStringPattern(), true, 'to'),
            new DefaultValidatorType('resume', new StringPattern(), true, 'resume'),
            new DefaultValidatorType('topics', new ArrayPattern(), true, 'topics'),
            new DefaultValidatorType('contributions', new ArrayPattern(), true, 'contributions'),
            new DefaultValidatorType('events', new ArrayPattern(), true, 'events'),
        ]);
    }

    validateUpdateData(requestData: any) {
        super.validateData(requestData, [
            new DefaultValidatorType('title', new StringPattern(), false, 'title'),
            new DefaultValidatorType('from', new DateOrEmptyStringPattern(), false, 'from'),
            new DefaultValidatorType('to', new DateOrEmptyStringPattern(), false, 'to'),
            new DefaultValidatorType('resume', new StringPattern(), false, 'resume'),
            new DefaultValidatorType('topics', new ArrayPattern(), false, 'topics'),
            new DefaultValidatorType('contributions', new ArrayPattern(), false, 'contributions'),
            new DefaultValidatorType('events', new ArrayPattern(), false, 'events'),
        ]);
    }
}
