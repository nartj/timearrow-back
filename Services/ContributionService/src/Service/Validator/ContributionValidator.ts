import { BaseValidator } from './BaseValidator';
import { DefaultValidatorType } from "./DefaultValidatorType";
import { StringPattern } from './Pattern/StringPattern';
import { NumberPattern } from './Pattern/NumberPattern';
import { Service } from "typedi";

@Service()
export class ContributionValidator extends BaseValidator {

    public validateCreateData(requestData: any): void {
        super.validateData(requestData, [
            new DefaultValidatorType('state', new NumberPattern(), true, 'state'),
            new DefaultValidatorType('timeline', new NumberPattern(), true, 'timeline'),
            new DefaultValidatorType('event', new NumberPattern(), true, 'event'),
            new DefaultValidatorType('user', new NumberPattern(), true, 'user'),
        ]);
    }

    validateUpdateData(requestData: any) {
        super.validateData(requestData, [
            new DefaultValidatorType('state', new NumberPattern(), false, 'state'),
            new DefaultValidatorType('timeline', new NumberPattern(), false, 'timeline'),
            new DefaultValidatorType('event', new NumberPattern(), false, 'event'),
            new DefaultValidatorType('user', new NumberPattern(), false, 'user'),
        ]);
    }
}
